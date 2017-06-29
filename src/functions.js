export function caloriesPerDay(calories, fat, proteins, carbs) {
    var howMuchKcal = {
        fat: calories * (fat / 100),
        proteins: calories * (proteins / 100),
        carbs: calories * (carbs / 100)
    }
    return howMuchKcal;
}

export function countGrams(aliment) {
    var howMuchCalories = {
        fat: Math.floor(aliment.fat / 9),
        proteins: Math.floor(aliment.proteins / 4),
        carbs: Math.floor(aliment.carbs / 4)
    }
    return howMuchCalories;
}

function aliment(fat, proteins, carbs) { // Nutritions in grams
    const aliment = {
        fat: fat * 9,
        proteins: proteins * 4,
        carbs: carbs * 4
    }
    return aliment; // Object contains nutritions in kcal
}

function portion(aliment, quantity) { //Aliment contains nutritions in grams
    const portion = {
        fat: aliment.fat * quantity / 100,
        proteins: aliment.proteins * quantity / 100,
        carbs: aliment.carbs * quantity / 100
    }
    return portion;
}