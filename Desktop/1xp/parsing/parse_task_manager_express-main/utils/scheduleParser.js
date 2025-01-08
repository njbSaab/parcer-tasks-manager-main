const ParserService = require("../services/parserService");
const saveTaskLog = require("./saveTaskLog");
const addTaskToQueue = require("../services/queueService");

/**
 * Планирует выполнение задачи парсинга
 * @param {string} url - URL для парсинга
 * @param {string} content - Контент для поиска
 * @param {string} interval - Интервал в формате "3h", "1d"
 */
const scheduleParserTask = async (task_id, url, content, interval) => {
  try {
    console.log(
      `Запуск парсинга: Task ID=${task_id}, URL=${url}, Interval=${interval}`
    );
    const log = await ParserService.runParser(url, content, interval);

    if (!log || !log.nextRun) {
      console.error("Ошибка: `nextRun` не рассчитан или отсутствует.");
      await saveTaskLog(task_id, "ошибка", "Ошибка при расчете nextRun");
      return;
    }

    // Сохраняем результат в логах
    console.log(`[scheduleParserTask] Лог результата:`, log);
    await saveTaskLog(
      task_id,
      log.success ? "успешно" : "ошибка",
      JSON.stringify(log)
    );

    // Добавляем следующую задачу в очередь
    const nextRun = calculateNextRun(interval);
    console.log(`Следующий запуск задачи ID=${task_id} в ${nextRun}`);

    await addTaskToQueue({ task_id, url, content, interval, nextRun });
  } catch (error) {
    console.error("Ошибка при планировании парсинга:", error.message);
    await saveTaskLog(task_id, "ошибка", error.message);
  }
};
module.exports = scheduleParserTask;
