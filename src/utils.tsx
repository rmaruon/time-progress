export const calcYearProgress = (time: number) => {
  const date = new Date(time);

  const startOfYear = new Date(date.getFullYear(), 0, 1).getTime();
  const startOfNextYear = new Date(date.getFullYear() + 1, 0, 1).getTime();

  const yearMillisecond = startOfNextYear - startOfYear;

  return Math.floor(((time - startOfYear) / yearMillisecond) * 100);
};

export const calcMonthProgress = (time: number) => {
  const date = new Date(time);

  const startOfMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getTime();
  const startOfNextMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    1
  ).getTime();

  const monthMillisecond = startOfNextMonth - startOfMonth;

  return Math.floor(((time - startOfMonth) / monthMillisecond) * 100);
};

export const calcDayProgress = (time: number) => {
  const date = new Date(time);

  const startOfDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  ).getTime();
  const startOfNextDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + 1
  ).getTime();

  const dayMillisecond = startOfNextDay - startOfDay;

  return Math.floor(((time - startOfDay) / dayMillisecond) * 100);
};
