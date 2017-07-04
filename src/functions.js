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

export function convertToArray(products) {
    const arrayOfProducts = [];
    for (let property in products) {
        const product = {name: property, properties: products[property]};
        arrayOfProducts.push(product);
    }
    return arrayOfProducts;
}