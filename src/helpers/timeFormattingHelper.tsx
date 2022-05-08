import { SIXTY } from 'constants/common';

export const timeFormattingHelper = (value: number): [number, number] => {
  const hours = Math.floor(value / SIXTY);
  const minutes = value - hours * SIXTY;

  return [hours, minutes];
};
