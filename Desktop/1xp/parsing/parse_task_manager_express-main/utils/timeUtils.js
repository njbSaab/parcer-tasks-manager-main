/**
 * Рассчитывает дату следующего запуска
 * @param {string} interval - Интервал в формате "3h", "1d", "15m"
 * @returns {Date} - Дата следующего запуска
 */
exports.calculateNextRun = (interval) => {
  const now = new Date();
  const [value, unit] = [parseInt(interval), interval.slice(-1)];

  switch (unit) {
    case "m": // Минуты
      return new Date(now.getTime() + value * 60 * 1000);
    case "h": // Часы
      return new Date(now.getTime() + value * 60 * 60 * 1000);
    case "d": // Дни
      return new Date(now.getTime() + value * 24 * 60 * 60 * 1000);
    case "w": // Недели
      return new Date(now.getTime() + value * 7 * 24 * 60 * 60 * 1000);
    default:
      throw new Error("Unsupported interval format");
  }
};
