export default function calculateDaysBetweenDates(date1, date2) {
  const oneDay = 1000 * 60 * 60 * 24; // milliseconds in a day
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(timeDiff / oneDay);
  return diffDays;
}
