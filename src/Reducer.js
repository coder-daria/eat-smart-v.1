import { NEW_FOOD, SELECT_FOOD, ADD_SELECTED_FOOD, REMOVE_SELECTED_FOOD, ADD_FOODS_OF_NEW_MEAL_TO_MEALS, SHOW_MEAL_DETAILS, ADD_PREFERENCE, EDIT_FOOD} from './Actions';
import {addIdToMyNewFood} from './functions';

export default function reducer(state, action) {
    switch (action.type) {
        case NEW_FOOD:
            let newFoodWithId = addIdToMyNewFood(action.content);
            let newItems = {...state.foods, ...newFoodWithId};
            for (let key in state.foods) {
                if (state.foods[key].name === action.content.name) {
                    return state;
                }
            }

            return Object.assign({}, state, { foods: newItems });

        case SELECT_FOOD:
            return Object.assign({}, state, { selected: action.content });

        case ADD_SELECTED_FOOD:
            let arrayOfId = [...state.foodsOfNewMeal, action.content];
            return Object.assign({}, state, { foodsOfNewMeal: arrayOfId });

        case REMOVE_SELECTED_FOOD:
            let newArrayOfFoodsId = state.foodsOfNewMeal.filter(foodId => foodId !== action.content);
            return Object.assign({}, state, { foodsOfNewMeal: newArrayOfFoodsId });

        case ADD_FOODS_OF_NEW_MEAL_TO_MEALS:
            let newMeal = action.content;
            let newMealName = action.content.mealName;

            let listOfMealsNames = [...state.predefinedMealsNames, newMealName ]
            let newListOfMeals = [...state.meals, newMeal];
            return Object.assign({}, state, { foodsOfNewMeal: [], meals: newListOfMeals, predefinedMealsNames: listOfMealsNames});

        case SHOW_MEAL_DETAILS:
            let yourMealName = action.content;
            let yourMeal = {}

            for(let key in state.meals) {
                if(state.meals[key].mealName === yourMealName) {
                    yourMeal = state.meals[key]
                }
            }

            return Object.assign({}, state, {selectedMeal: yourMeal });

        case ADD_PREFERENCE:
            let preference = action.content;
            let mealsPreferences = [...state.mealsPreferences, preference]
            return Object.assign({}, state, {mealsPreferences: mealsPreferences});
        case EDIT_FOOD:
            let foodID = action.content.properties.id;

             if (state.foods[foodID].properties.id === foodID) {
                state.foods[foodID] = {...action.content}
            }
            return Object.assign({}, state);

        default:
            return state;
    }
}