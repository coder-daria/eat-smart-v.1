import {sum} from './functions';

it('sums positive numbers', () => {
  expect(sum(2, 3)).toEqual(5);
});

it('sums negative numbers', () => {
  expect(sum(-1, -4)).toEqual(-5);
});