import {countKcal, countGrams} from './functions';

it('counts calories', () => {
  expect(countKcal(2000, 20,30, 50)).toEqual({
    fat: 400,
    proteins: 600,
    carbs: 1000
  });
});

it('counts grams', () => {
  expect(countGrams({
    fat: 400,
    proteins: 600,
    carbs: 1200
  })).toEqual({
    fat: 44,
    proteins: 150,
    carbs: 300
  })
})