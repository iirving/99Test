import calculateDaysBetweenDates from "../lib/caluculateDaysBetweenDates";

test("calculates the number of days between two dates", () => {
  const date1 = new Date(2022, 0, 1); // January 1, 2022
  const date2 = new Date(2022, 0, 31); // January 31, 2022
  expect(calculateDaysBetweenDates(date1, date2)).toBe(30);
});

test("returns 0 when the two dates are the same", () => {
  const date1 = new Date(2022, 0, 1); // January 1, 2022
  const date2 = new Date(2022, 0, 1); // January 1, 2022
  expect(calculateDaysBetweenDates(date1, date2)).toBe(0);
});

test("throws an error when either date is not a Date object", () => {
  const date1 = new Date(2022, 0, 1); // January 1, 2022
  const notADate = "not a date";
  expect(() => calculateDaysBetweenDates(date1, notADate)).toThrow();
});
