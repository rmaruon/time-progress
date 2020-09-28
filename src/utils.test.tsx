import { calcYearProgress, calcMonthProgress, calcDayProgress } from "./utils";

test("test calcYearProgress", () => {
  const time1 = new Date(2020, 1 - 1, 1).getTime();
  const time2 = new Date(2020, 7 - 1, 2).getTime();
  const time3 = time2 - 1;

  expect(calcYearProgress(time1)).toBe(0);
  expect(calcYearProgress(time2)).toBe(50);
  expect(calcYearProgress(time3)).toBe(49);
});

test("test calcMonthProgress", () => {
  const time1 = new Date(2020, 9 - 1, 1).getTime();
  const time2 = new Date(2020, 9 - 1, 16).getTime();
  const time3 = time2 - 1;

  expect(calcMonthProgress(time1)).toBe(0);
  expect(calcMonthProgress(time2)).toBe(50);
  expect(calcMonthProgress(time3)).toBe(49);
});

test("test calcDayProgress", () => {
  const time1 = new Date(2020, 9 - 1, 1, 0, 0, 0).getTime();
  const time2 = new Date(2020, 9 - 1, 1, 12, 0, 0).getTime();
  const time3 = new Date(2020, 9 - 1, 1, 11, 59, 59).getTime();

  expect(calcDayProgress(time1)).toBe(0);
  expect(calcDayProgress(time2)).toBe(50);
  expect(calcDayProgress(time3)).toBe(49);
});
