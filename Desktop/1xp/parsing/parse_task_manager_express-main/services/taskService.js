const express = require("express");
const router = express.Router();
const {
  ensureDatabaseInitialized,
} = require("../../controllers/databaseController");
const Task = require("../../models/taskModel");

router.post("/parser", async (req, res) => {
  try {
    const { url, content, interval, frequency, period, userId } = req.body;

    console.log("Данные, полученные от клиента:", req.body);

    if (!url || !content || !interval || !userId) {
      return res.status(400).json({
        error: "Все поля (url, content, interval, userId) обязательны.",
      });
    }

    await ensureDatabaseInitialized();

    const taskRepo = AppDataSource.getRepository(Task);

    const newTask = taskRepo.create({
      user_id: userId,
      name: `Парсинг: ${url}`,
      url,
      content,
      interval,
      frequency,
      period,
    });

    console.log("Создана новая задача:", newTask);

    await taskRepo.save(newTask);
    res.status(200).json({
      message: "Задача успешно создана и запланирована.",
      task: newTask,
    });
  } catch (error) {
    console.error("Ошибка при создании задачи:", error.message);
    res.status(500).json({ error: "Ошибка при создании задачи" });
  }
});

module.exports = router;
