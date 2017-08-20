import * as products from './products';
import uuidv4 from 'uuid/v4';

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
    }, 1000)
  }

  return new Promise(fn);
}

/*
input
{year: 2017, month: 12, day: 5,}

output
{2017: {12: {5: [{mealName: "breakfast", details: [foods...]}, {mealName: "lunch", details: [foods...]}]} }}
 */
function findMealsIn(date) {

  // const fetchOptions = { mode: 'cors', method: 'GET' };
  //   fetch('http://localhost:3001', fetchOptions)
  // .then(data => data.json())

  function fn(resolve, reject) {
    setTimeout(() => {
      const result = {
        [date.year]: {
          [date.month]: {
            [date.day]: [
              { mealName: "breakfast", details: [] },
              { mealName: "lunch", details: [] }]
          }
        }
      };
      resolve(result);
    }, 1000)
  }

  return new Promise(fn);
}


const exports = { listAllProducts, addFood, findMealsIn };
export default exports;