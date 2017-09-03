import * as products from './products';
import uuidv4 from 'uuid/v4';
import moment from 'moment';
import R from 'ramda';

function listAllProducts() {
  for (let productName in products) {
    products[productName].id = uuidv4();
  }
  return products;
}

/*
input
{name: "twarog", fat: 4, carbohydrate: 5, protein: 4}

output
{name: "twarog", fat: 4, carbohydrate: 5, protein: 4, id:12345}
 */
function addFood(food) {
  // const fetchOptions = { mode: 'cors', method: 'GET' };
  //   fetch('http://localhost:3001', fetchOptions)
  // .then(data => data.json())

  function fn(resolve, reject) {
    setTimeout(() => {
      const objectFromServer = Object.assign({}, food, { id: uuidv4() });
      resolve(objectFromServer);
    }, 1000);
  }

  return new Promise(fn);
}

const randomMeals = [
  {
    name: 'Breakfast',
    foods: [
      {
        name: 'tomato',
        id: 'f400558e-251a-4f7e-8d05-66e35btomato',
        quantity: '10',
        unit: 'grams'
      }
    ]
  },
  {
    name: 'Morning snack',
    foods: [
      {
        name: 'tomato',
        id: 'f400558e-251a-4f7e-8d05-66e35btomato',
        quantity: '20',
        unit: 'grams'
      }
    ]
  },
  {
    name: 'Lunch',
    foods: [
      {
        name: 'tomato',
        id: 'f400558e-251a-4f7e-8d05-66e35btomato',
        quantity: '30',
        unit: 'grams'
      }
    ]
  },
  {
    name: 'Dinner',
    foods: [
      {
        name: 'tomato',
        id: 'f400558e-251a-4f7e-8d05-66e35btomato',
        quantity: '50',
        unit: 'grams'
      }
    ]
  },
  {
    name: 'Evening snack',
    foods: [
      {
        name: 'egg',
        id: 'f400558e-251a-4f7e-8d05-66e35b729egg',
        quantity: '70',
        unit: 'grams'
      }
    ]
  }
];

const mealsAddedByUser = {};
window.meals = mealsAddedByUser;

/*
input
{year: 2017, month: 12, day: 5,}

output
{meals: [{meal: "breakfast", foods: [foods...]}, {meal: "lunch", foods: [foods...]}]}
 */
function findMealsIn(date) {
  // const fetchOptions = { mode: 'cors', method: 'GET' };
  //   fetch('http://localhost:3001', fetchOptions)
  // .then(data => data.json())

  function fn(resolve, reject) {
    const seconds = moment(date)
      .startOf('day')
      .unix();
    if (!mealsAddedByUser[seconds]) {
      mealsAddedByUser[seconds] = R.clone(randomMeals);
    }
    setTimeout(() => {
      resolve(mealsAddedByUser[seconds]);
    }, 1000);
  }

  return new Promise(fn);
}

function addMeals(meals, date) {
  function fn(resolve, reject) {
    const seconds = moment(date)
      .startOf('day')
      .unix();
    mealsAddedByUser[seconds] = meals;
    setTimeout(() => {
      resolve(mealsAddedByUser[seconds]);
    }, 1000);
  }

  return new Promise(fn);
}

const exports = { listAllProducts, addFood, findMealsIn, addMeals };
export default exports;
