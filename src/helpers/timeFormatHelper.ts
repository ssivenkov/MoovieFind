export const timeFormatHelper = (value: number): [number, number] => {
  const hours = Math.floor(value / 60);
  const minutes = value - hours * 60;

  return [hours, minutes];
};
