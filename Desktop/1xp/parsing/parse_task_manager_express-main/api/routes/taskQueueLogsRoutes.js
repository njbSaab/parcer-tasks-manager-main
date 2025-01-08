//taskQueueLogsRoutes.js
const express = require("express");
const router = express.Router();
const AppDataSource = require("../../config/database");
const TaskQueueLog = require("../../models/taskQueueLogModel");

router.get("/", async (req, res) => {
  try {
    const queueLogRepo = AppDataSource.getRepository(TaskQueueLog);
    const logs = await queueLogRepo.find();
    res.status(200).json(logs);
  } catch (error) {
    console.error("Ошибка при получении логов очереди:", error.message);
    res.status(500).json({ error: "Ошибка при получении логов очереди" });
  }
});

module.exports = router;
