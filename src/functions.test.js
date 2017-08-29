import * as utils from './functions';
import moment from 'moment';

it('counts calories', () => {
  expect(utils.caloriesPerDay(2000, 20, 30, 50)).toEqual({
    fat: 400,
    protein: 600,
    carbs: 1000
  });
});

it('counts grams', () => {
  expect(
    utils.countGrams({
      fat: 400,
      protein: 600,
      carbs: 1200
    })
  ).toEqual({
    fat: 44,
    protein: 150,
    carbs: 300
  });
});

it('creates an aliment object', () => {
  expect(utils.aliment(2, 6, 51)).toEqual({
    fat: 18,
    protein: 24,
    carbs: 204
  });
});

it('creates a portion object', () => {
  expect(
    utils.portion(
      {
        fat: 2,
        protein: 6,
        carbs: 51
      },
      300
    )
  ).toEqual({
    fat: 6,
    protein: 18,
    carbs: 153
  });
});

it('fetches the products from the server', () => {
  const products = utils.fetchProducts();
  const productsLength = Object.keys(products).length;
  const expectedProducts = 15;
  expect(productsLength).toEqual(expectedProducts);
});

xit('converts object of objects to array of objects', () => {
  const objectOfObjects = {
    jamon: { fat: 4 },
    twarog: { fat: 5 }
  };

  const expected = [{ name: 'jamon', fat: 4 }, { name: 'twarog', fat: 5 }];
  expect(utils.convertToArray(objectOfObjects)).toEqual(expected);
});

describe('shows the closest meal based on the current time', () => {
  const mealsPreferences = [
    {
      name: 'breakfast',
      // hour: 8,
      seconds: 480
    },
    {
      name: 'lunch',
      // hour: 13,
      seconds: 780
    },
    {
      name: 'dinner',
      // hour: 15,
      seconds: 900
    },
    {
      name: 'supper',
      // hour: 18:30,
      seconds: 1110
    },
    {
      name: 'dessert',
      // hour: 21:55,
      seconds: 1315
    }
  ];
  it('with a single meal, it returns it no matter what time is it', () => {
    const currentTime = moment().hour(10).minutes(0);
    const result = utils.findMealByClosestTime(
      currentTime,
      mealsPreferences.slice(0, 1)
    );

    expect(result).toEqual(mealsPreferences[0]);
  });
  describe('with multiple meals', () => {
    it('returns breakfast if the time is 3:00', () => {
      const currentTime = moment().hour(3).minutes(0);
      const result = utils.findMealByClosestTime(currentTime, mealsPreferences);

      expect(result).toEqual(mealsPreferences[0]);
    });
    it('returns breakfast if the time is 8:00', () => {
      const currentTime = moment().hour(8).minutes(0);
      const result = utils.findMealByClosestTime(currentTime, mealsPreferences);

      expect(result).toEqual(mealsPreferences[0]);
    });
    it('returns breakfast if the time is 10:00', () => {
      const currentTime = moment().hour(10).minutes(0);
      const result = utils.findMealByClosestTime(currentTime, mealsPreferences);

      expect(result).toEqual(mealsPreferences[0]);
    });
    it('returns lunch if the time is 12:00', () => {
      const currentTime = moment().hour(12).minutes(0);
      const result = utils.findMealByClosestTime(currentTime, mealsPreferences);

      expect(result).toEqual(mealsPreferences[1]);
    });
    it('returns dinner if the time is 15:00', () => {
      const currentTime = moment().hour(15).minutes(0);
      const result = utils.findMealByClosestTime(currentTime, mealsPreferences);

      expect(result).toEqual(mealsPreferences[2]);
    });
    it('returns supper if the time is 18:30', () => {
      const currentTime = moment().hour(18).minutes(30);
      const result = utils.findMealByClosestTime(currentTime, mealsPreferences);

      expect(result).toEqual(mealsPreferences[3]);
    });
    it('returns dessert if the time is 22:55', () => {
      const currentTime = moment().hour(22).minutes(55);
      const result = utils.findMealByClosestTime(currentTime, mealsPreferences);

      expect(result).toEqual(mealsPreferences[4]);
    });
    it('returns dessert if the time is 2:00', () => {
      const currentTime = moment().hour(2).minutes(0);
      const result = utils.findMealByClosestTime(currentTime, mealsPreferences);

      expect(result).toEqual(mealsPreferences[4]);
    });
  });
});
