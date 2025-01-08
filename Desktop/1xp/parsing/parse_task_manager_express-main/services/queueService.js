const AppDataSource = require("../config/database");
const TaskQueueLog = require("../models/taskQueueLogModel");
const Queue = require("bull");
const ParserService = require("./parserService");
const { calculateNextRun, calculateInterval } = require("../utils/timeUtils");
const saveTaskLog = require("../utils/saveTaskLog");

const parserQueue = new Queue("parser-tasks", {
  redis: {
    host: "localhost",
    port: 6379,
  },
});
// Добавление задачи в очередь с записью в базу данных
const addTaskToQueue = async (task) => {
  console.log(
    `[addTaskToQueue] Добавление задачи ID=${task.task_id} в очередь.`
  );
  try {
    const delay = new Date(task.nextRun).getTime() - Date.now();
    console.log(`[addTaskToQueue] Вычисленный delay: ${delay} мс.`);
    if (delay > 0) {
      await parserQueue.add(task, {
        delay,
        jobId: `task-${task.task_id}`, // Уникальный идентификатор
      });
      console.log(`[addTaskToQueue] Задача ID=${task.task_id} добавлена.`);

      // Сохранение записи в таблицу task_queue_logs
      const queueLogRepo = AppDataSource.getRepository(TaskQueueLog);
      const existingLog = await queueLogRepo.findOne({
        where: { task_id: task.task_id, next_run: new Date(task.nextRun) },
      });

      if (!existingLog) {
        const queueLog = queueLogRepo.create({
          task_id: task.task_id,
          next_run: new Date(task.nextRun),
          status: "ожидание",
        });
        await queueLogRepo.save(queueLog);
        console.log(
          `[addTaskToQueue] Лог для задачи ID=${task.task_id} сохранен.`
        );
      } else {
        console.log(
          `[addTaskToQueue] Лог для задачи ID=${task.task_id} уже существует.`
        );
      }
    } else {
      console.warn(
        `[addTaskToQueue] Задача ID=${task.task_id} пропущена (отрицательная задержка).`
      );
    }
  } catch (error) {
    console.error(
      `[addTaskToQueue] Ошибка при добавлении задачи ID=${task.task_id}: ${error.message}`
    );
  }
};
// Добавление повторяющейся задачи
const addRecurringTask = async (task) => {
  try {
    console.log(`[addRecurringTask] Добавление задачи ID=${task.task_id}.`);
    await parserQueue.add(task, {
      repeat: {
        every: calculateInterval(task.interval),
      },
      jobId: `task-${task.task_id}`,
    });
    console.log(
      `[addRecurringTask] Повторяющаяся задача ID=${task.task_id} добавлена.`
    );
  } catch (error) {
    console.error(
      `[addRecurringTask] Ошибка при добавлении задачи ID=${task.task_id}: ${error.message}`
    );
  }
};
// Обработка задач из очереди
parserQueue.process(async (job) => {
  const { task_id, url, content, interval } = job.data;
  console.log(`[process] Обработка задачи ID=${task_id}.`);

  try {
    const queueLogRepo = AppDataSource.getRepository(TaskQueueLog);
    const taskLog = await queueLogRepo.findOne({ where: { task_id } });

    if (taskLog) {
      taskLog.status = "выполняется";
      taskLog.last_run = new Date();
      await queueLogRepo.save(taskLog);
      console.log(
        `[process] Задача ID=${task_id} обновлена как "выполняется".`
      );
    }

    const result = await ParserService.runParser(url, content, interval);
    console.log(`[process] Результат задачи ID=${task_id}:`, result);

    // Сохранение результата парсинга в логи
    await saveTaskLog(
      task_id,
      result.success ? "успешно" : "ошибка",
      JSON.stringify(result)
    );

    const nextRun = calculateNextRun(interval);
    console.log(
      `[process] Следующий запуск задачи ID=${task_id} в ${nextRun}.`
    );
    await addTaskToQueue({ task_id, url, content, interval, nextRun });

    if (taskLog) {
      taskLog.status = result.success ? "ожидание" : "ошибка";
      taskLog.next_run = new Date(nextRun);
      await queueLogRepo.save(taskLog);
      console.log(`[process] Задача ID=${task_id} завершена.`);
    }
  } catch (error) {
    console.error(`[process] Ошибка задачи ID=${task_id}: ${error.message}`);
    const queueLogRepo = AppDataSource.getRepository(TaskQueueLog);
    const taskLog = await queueLogRepo.findOne({ where: { task_id } });
    if (taskLog) {
      taskLog.status = "ошибка";
      await queueLogRepo.save(taskLog);
      console.log(`[process] Задача ID=${task_id} обновлена как "ошибка".`);
    }

    // Сохранение ошибки в логи
    await saveTaskLog(task_id, "ошибка", error.message);
  }
});
// Слушатели событий очереди
parserQueue.on("completed", (job) => {
  console.log(`[queueEvent] Задача ID=${job.id} успешно завершена.`);
});
parserQueue.on("failed", (job, err) => {
  console.error(
    `[queueEvent] Задача ID=${job.id} завершилась с ошибкой: ${err.message}`
  );
});
module.exports = {
  addTaskToQueue,
  addRecurringTask,
  parserQueue,
};
