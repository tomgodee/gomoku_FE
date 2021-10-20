// import { render, screen } from '@testing-library/react';
import utils from '../utils';

test('if jest is working', () => {
  expect(utils.sum(1, 2)).toBe(3);
});
