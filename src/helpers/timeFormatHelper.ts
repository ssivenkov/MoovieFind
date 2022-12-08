export const timeFormatHelper = (value: number): [number, number] => {
  const minutesCount = 60;

  const hours = Math.floor(value / minutesCount);
  const minutes = value - hours * minutesCount;

  return [hours, minutes];
};
