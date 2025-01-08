const AppDataSource = require("../config/database"); // Подключение базы
const TaskLog = require("../models/taskLogModel"); // Модель для task_logs

const saveTaskLog = async (task_id, status, message) => {
  try {
    const logRepo = AppDataSource.getRepository(TaskLog);
    const log = logRepo.create({
      task_id,
      status,
      message,
      created_at: new Date(),
    });
    await logRepo.save(log);
    console.log("Лог успешно сохранён в базу данных:", log);
  } catch (error) {
    console.error("Ошибка при сохранении лога в базу данных:", error.message);
  }
};