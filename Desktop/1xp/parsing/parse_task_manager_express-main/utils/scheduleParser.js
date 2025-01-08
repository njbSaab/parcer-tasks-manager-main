const ParserService = require("../services/parserService");
const saveTaskLog = require("./saveTaskLog");

/**
 * Планирует выполнение задачи парсинга
 * @param {string} url - URL для парсинга
 * @param {string} content - Контент для поиска
 * @param {string} interval - Интервал в формате "3h", "1d"
 */
const scheduleParserTask = async (task_id, url, content, interval) => {
  try {
    console.log(`Запуск парсинга: Task ID=${task_id}, URL=${url}, Content="${content}", Interval=${interval}`);

    const log = await ParserService.runParser(url, content, interval);
    console.log("Результат парсинга:", log);

    if (!log || !log.nextRun) {
      console.error("Ошибка: `nextRun` не рассчитан или отсутствует.");
      await saveTaskLog(task_id, "ошибка", "Ошибка при расчете nextRun");
      return;
    }

    const delay = new Date(log.nextRun).getTime() - Date.now();
    console.log(`Следующий запуск через: ${delay} мс (${delay / 1000} секунд)`);

    // Сохраняем лог в базу данных
    await saveTaskLog(task_id, log.result ? 'успешно' : 'ошибка', JSON.stringify(log));

    if (delay > 0) {
      setTimeout(() => scheduleParserTask(task_id, url, content, interval), delay);
    } else {
      console.error("Ошибка: рассчитанная задержка отрицательная.");
    }
  } catch (error) {
    console.error("Ошибка при планировании парсинга:", error.message);
    // Логируем ошибку в базу данных
    await saveTaskLog(task_id, 'ошибка', error.message);
  }
};

module.exports = scheduleParserTask;
