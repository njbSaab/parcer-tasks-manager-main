const ParserService = require("../services/parserService");

/**
 * Планирует выполнение задачи парсинга
 * @param {string} url - URL для парсинга
 * @param {string} content - Контент для поиска
 * @param {string} interval - Интервал в формате "3h", "1d"
 */
const scheduleParserTask = async (url, content, interval) => {
  try {
    console.log(
      `Запуск парсинга: URL=${url}, Content="${content}", Interval=${interval}`
    );

    const log = await ParserService.runParser(url, content, interval);
    console.log("Результат парсинга:", log);

    if (!log || !log.nextRun) {
      console.error("Ошибка: `nextRun` не рассчитан или отсутствует.");
      return;
    }

    const delay = new Date(log.nextRun).getTime() - Date.now();
    console.log(`Следующий запуск через: ${delay} мс (${delay / 1000} секунд)`);

    if (delay > 0) {
      // Планируем следующий запуск
      setTimeout(() => scheduleParserTask(url, content, interval), delay);
    } else {
      console.error("Ошибка: рассчитанная задержка отрицательная.");
    }
  } catch (error) {
    console.error("Ошибка при планировании парсинга:", error.message);
  }
};

module.exports = scheduleParserTask;
