import server from './server/serverMock';

export function caloriesPerDay(calories, fat, protein, carbs) {
    var howMuchKcal = {
        fat: calories * (fat / 100),
        protein: calories * (protein / 100),
        carbs: calories * (carbs / 100)
    }
    return howMuchKcal;
}

export function countGrams(aliment) {
    var howMuchCalories = {
        fat: Math.floor(aliment.fat / 9),
        protein: Math.floor(aliment.protein / 4),
        carbs: Math.floor(aliment.carbs / 4)
    }
    return howMuchCalories;
}

export function aliment(fat, protein, carbs) { // Nutritions in grams
    const aliment = {
        fat: fat * 9,
        protein: protein * 4,
        carbs: carbs * 4
    }
    return aliment; // Object contains nutritions in kcal
}

export function sumFoods(food1, food2){
    return {
        fat: food1.fat + food2.fat,
        protein: food1.protein + food2.protein,
        carbs: food1.carbs + food2.carbs
    }
}

export function portion(aliment, quantity) { //Aliment contains nutritions in grams
    const portion = {
        fat: aliment.fat * quantity / 100,
        protein: aliment.protein * quantity / 100,
        carbs: aliment.carbs * quantity / 100
    }
    return portion;
}

export function fetchProducts() {
    return server.listAllProducts();
}

export function convertFoodsFromServer(productsFromServer) {
    const products = {};
    for (let name in productsFromServer) {
        const product = {name: name, properties: productsFromServer[name]};
        products[product.properties.id] = product;
    }
    return products;
}

export function convertObjectToArray(object){
    const newArray = [];
    for(let key in object){
        newArray.push(object[key]);
    }
    return newArray;
}

export function addIdToMyNewFood(newFood) {
    let myNewFood = {
        [newFood.name] : newFood
    }
    for(let key in myNewFood){
        myNewFood[key].id = server.hashCode(key);
    }
    return convertFoodsFromServer(myNewFood);
}