/**
 * Рассчитывает интервал в миллисекундах
 * @param {string} interval - Интервал в формате "3h", "1d", "15m"
 * @returns {number} - Интервал в миллисекундах
 */
const calculateInterval = (interval) => {
  const [value, unit] = [parseInt(interval, 10), interval.slice(-1)];

  switch (unit) {
    case "m":
      return value * 60 * 1000;
    case "h":
      return value * 60 * 60 * 1000;
    case "d":
      return value * 24 * 60 * 60 * 1000;
    default:
      throw new Error("Unsupported interval format");
  }
};

/**
 * Рассчитывает дату следующего запуска
 * @param {string} interval - Интервал в формате "3h", "1d", "15m"
 * @returns {Date} - Дата следующего запуска
 */
const calculateNextRun = (interval) => {
  const now = new Date();
  return new Date(now.getTime() + calculateInterval(interval));
};

module.exports = {
  calculateInterval,
  calculateNextRun,
};
