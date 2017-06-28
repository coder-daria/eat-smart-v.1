export function countKcal(calories, fat, proteins, carbs) {
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