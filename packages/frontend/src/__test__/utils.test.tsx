// import { render, screen } from '@testing-library/react';
import { sum } from '../utils/helpers';

test('if jest is working', () => {
  expect(sum(1, 2)).toBe(3);
});
