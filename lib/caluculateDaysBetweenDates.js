/**
 * Calculates the number of days between two dates.
 *
 * @param {Date} date1 - The first date.
 * @param {Date} date2 - The second date.
 * @returns {number} The number of days between the two dates.
 */
export default function calculateDaysBetweenDates(date1, date2) {
  const oneDay = 1000 * 60 * 60 * 24; // milliseconds in a day
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(timeDiff / oneDay);
  return diffDays;
}
