//services/ParserService
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const { calculateNextRun } = require("../utils/timeUtils"); // Импортируем утилиту для расчета интервала

class ParserService {
  constructor() {
    this.logs = []; // Временное хранилище логов
    this.logFilePath = path.join(__dirname, "../logs/parser-logs.json"); // Путь к файлу логов

    // Загружаем существующие логи из файла при инициализации
    this.loadLogsFromFile();
  }

  /**
   * Метод для выполнения парсинга
   * @param {string} url - URL для запроса
   * @param {string} content - Контент, который нужно искать
   * @param {string} interval - Интервал в формате "3h", "1d"
   */
  async runParser(url, content, interval) {
    try {
      const response = await axios.get(url); // Получаем страницу
      const found = response.data.includes(content); // Проверяем наличие контента

      // Рассчитываем время следующего запуска
      const nextRun = calculateNextRun(interval);

      // Создаем лог
      const log = {
        date: new Date(), // Текущая дата
        url,
        content,
        result: found,
        nextRun, // Дата следующего запуска
      };

      // Сохраняем лог
      this.logs.push(log);
      this.saveLogsToFile();

      console.log(`Парсинг завершен. Найдено: ${found}`);
      return log;
    } catch (error) {
      console.error("Ошибка при парсинге:", error.message);
      return null;
    }
  }

  /**
   * Получение логов
   */
  getLogs() {
    return this.logs;
  }

  /**
   * Сохраняет текущие логи в файл
   */
  saveLogsToFile() {
    try {
      fs.writeFileSync(
        this.logFilePath,
        JSON.stringify(this.logs, null, 2),
        "utf8"
      );
    } catch (error) {
      console.error("Ошибка при сохранении логов:", error.message);
    }
  }

  /**
   * Загружает логи из файла в память
   */
  loadLogsFromFile() {
    if (fs.existsSync(this.logFilePath)) {
      try {
        const fileData = fs.readFileSync(this.logFilePath, "utf8");
        this.logs = JSON.parse(fileData);
      } catch (error) {
        console.error("Ошибка при загрузке логов из файла:", error.message);
      }
    }
  }
}

module.exports = new ParserService();
