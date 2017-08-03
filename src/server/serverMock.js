import * as products from './products';
import uuidv4 from 'uuid/v4';

function listAllProducts(){
    for(let productName in products){
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
function addFood(food){

  // const fetchOptions = { mode: 'cors', method: 'GET' };
  //   fetch('http://localhost:3001', fetchOptions)
  // .then(data => data.json())

  function fn(resolve, reject){
    setTimeout(() => {
      const objectFromServer = Object.assign({}, food, {id: uuidv4()});
      resolve(objectFromServer);
    }, 1000)
  }

  return new Promise(fn);
}

function addMeal(meal){

  // const fetchOptions = { mode: 'cors', method: 'GET' };
  //   fetch('http://localhost:3001', fetchOptions)
  // .then(data => data.json())

  function fn(resolve, reject){
    setTimeout(() => {
      const mealFromServer = Object.assign({}, meal, {id: uuidv4()});
      resolve(mealFromServer);
    }, 1000)
  }

  return new Promise(fn);
}


const exports = {listAllProducts, addFood, addMeal};
export default exports;