const express = require("express");
const router = express.Router();
const {
  ensureDatabaseInitialized,
} = require("../../controllers/databaseController");
const AppDataSource = require("../../config/database"); 
const Task = require("../../models/taskModel");
const scheduleParserTask = require("../../utils/scheduleParser");
const TaskLog = require("../../models/taskLogModel");

router.post("/parser", async (req, res) => {
  const { url, content, interval, frequency, period, userId } = req.body;

  console.log("Данные, отправленные клиентом:", req.body);

  if (!url || !content || !interval || !userId) {
    console.error("Ошибка: Отсутствуют обязательные поля:", req.body);
    return res.status(400).json({
      error: "Все поля (url, content, interval, userId) обязательны.",
    });
  }
  console.log("Проверка уникальности данных...");

  // const existingTasks = await AppDataSource.getRepository(Task).find({
  //   where: { url, content, user_id: userId },
  // });

  // if (existingTasks.length > 0) {
  //   console.log("Дублирующая задача найдена:", existingTasks);
  //   return res.status(409).json({ error: "Такая задача уже существует" });
  // }

  if (isNaN(userId)) {
    console.error("Ошибка: userId должен быть числом.", userId);
    return res.status(400).json({ error: "userId должен быть числом." });
  }

  try {
    console.log("Period получен:", period);
    await ensureDatabaseInitialized(); // Проверяем и инициализируем базу данных
    
    const taskRepo = AppDataSource.getRepository(Task);
    console.log("Репозиторий задач получен.");

    const newTask = taskRepo.create({
      user_id: userId,
      name: `🔎 ${url}`,
      url,
      content,
      interval,
      frequency,
      period,
    });

    console.log("Новая задача создана:", newTask);

    await taskRepo.save(newTask);
    console.log("Задача успешно сохранена в базе данных.");

    // Передаем `task_id` в планировщик
    await scheduleParserTask(newTask.id, url, content, interval);

    res.status(200).json({
      message: "Задача успешно создана и запланирована.",
      task: newTask,
    });
  } catch (error) {
    console.error("Ошибка при создании задачи:", error.message);
    res.status(500).json({ error: "Ошибка при создании задачи" });
  }
});
// Получение всех задач
router.get("/", async (req, res) => {
  try {
    const taskRepo = AppDataSource.getRepository(Task);
    const tasks = await taskRepo.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Ошибка при получении задач:", error.message);
    res.status(500).json({ error: "Ошибка при получении задач" });
  }
});
// получения логов задачи по task_id
router.get("/:task_id/logs", async (req, res) => {
  const { task_id } = req.params;

  try {
    // Убедитесь, что logRepo получает TaskLog
    const logRepo = AppDataSource.getRepository(TaskLog);
    const logs = await logRepo.find({
      where: { task_id },
      order: { created_at: "DESC" },
    });
    
    res.status(200).json(logs);
  } catch (error) {
    console.error("Ошибка при получении логов:", error.message);
    res.status(500).json({ error: "Ошибка при получении логов" });
  }
});

module.exports = router;
