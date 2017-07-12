export const NEW_FOOD = "NEW_FOOD";
export const SELECT_FOOD = "SELECT_FOOD";
export const ADD_SELECTED_FOOD = "ADD_SELECTED_FOOD";
export const REMOVE_SELECTED_FOOD = "REMOVE_SELECTED_FOOD";
export const ADD_LIST_TO_MEALS = "ADD_LIST_TO_MEALS"
export const SHOW_MEAL_DETAILS = "SHOW_MEAL_DETAILS";


export function newFood(food){
    return {type: NEW_FOOD, content: food};
}

export function selectFood(foodId) {
    return {type: SELECT_FOOD, content: foodId};
}

export function addSelectedFood(foodId) {
    return {type: ADD_SELECTED_FOOD, content: foodId}
}

export function removeSelectedFood(food) {
    return {type: REMOVE_SELECTED_FOOD, content: food}
}

export function addListToMeals(meal, mealName) {
    return {type: ADD_LIST_TO_MEALS, content: {mealName: mealName, details: meal}}
}

export function showMealDetails(meal) {
    return {type: SHOW_MEAL_DETAILS, content: meal}
}
