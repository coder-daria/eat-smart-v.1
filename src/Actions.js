
export const NEW_FOOD = "NEW_FOOD";
export const ADD_SELECTED_FOOD = "ADD_SELECTED_FOOD";
export const REMOVE_SELECTED_FOOD = "REMOVE_SELECTED_FOOD";
export const ADD_FOODS_OF_NEW_MEAL_TO_MEALS = "ADD_FOODS_OF_NEW_MEAL_TO_MEALS"
export const SHOW_MEAL_DETAILS = "SHOW_MEAL_DETAILS";
export const SAVE_PREFERENCES = "SAVE_PREFERENCES";
export const MEAL_HISTORY_FOR_DAY = "MEAL_HISTORY_FOR_DAY";
export const UPDATE_PREFERENCE = "UPDATE_PREFERENCE";
export const SELECTED_DATE = "SELECTED_DATE";
export const EDIT_FOOD = "EDIT_FOOD";
export const IS_LOADING = "IS_LOADING";


export const newFood = food => {
    return { type: NEW_FOOD, content: food };
}

export function addSelectedFood(foodId) {
    return { type: ADD_SELECTED_FOOD, content: foodId }
}

export function removeSelectedFood(foodId) {
    return { type: REMOVE_SELECTED_FOOD, content: foodId }
}

export function addFoodsOfNewMealToMeals(meal, mealName) {
    return { type: ADD_FOODS_OF_NEW_MEAL_TO_MEALS, content: { mealName: mealName, details: meal } }
}

export function showMealDetails(mealName) {
    return { type: SHOW_MEAL_DETAILS, content: mealName }
}

export function editFood(food) {
    return { type: EDIT_FOOD, content: food }
}

export function isLoading(value) {
    return { type: IS_LOADING, content: value };
}

export function savePreferences(value) {
    return { type: SAVE_PREFERENCES, content: value };
}

export function selectedDate(date) {
    return { type: SELECTED_DATE, content: date };
}

export function mealHistoryForDay(meals) {
    return { type: MEAL_HISTORY_FOR_DAY, content: meals };
}