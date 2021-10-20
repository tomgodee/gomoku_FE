import { cardValues } from '../config/constants';

export const sum = (a: number, b: number) => {
  return a + b;
};

export const shuffle = (text: string) => {
  const a = text.split('');
  const n = a.length;

  for (let i = n - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join('');
};

export const getCardImageName = (value: number, suite: string): string => {
  return `${cardValues.get(value)}Of${suite.slice(0, 1).toUpperCase()}${suite.slice(1)}`;
};

export default {
  sum,
  shuffle,
  getCardImageName,
};
