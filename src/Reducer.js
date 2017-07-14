import { NEW_FOOD, SELECT_FOOD, ADD_SELECTED_FOOD, REMOVE_SELECTED_FOOD, ADD_LIST_TO_MEALS, SHOW_MEAL_DETAILS } from './Actions';
import {addIdToMyNewFood} from './functions';

export default function reducer(state, action) {
    switch (action.type) {
        case NEW_FOOD:
            let newFoodWithId = addIdToMyNewFood(action.content);
            let newItems = [...state.foods, newFoodWithId];

            for (var key in state.foods) {
                if (state.foods[key].name === action.content.name) {
                    return state;
                }
            }
            return Object.assign({}, state, { foods: newItems });
        case SELECT_FOOD:
            return Object.assign({}, state, { selected: action.content });


        case ADD_SELECTED_FOOD:
            let arrayOfId = [...state.list, action.content];
            return Object.assign({}, state, { list: arrayOfId });


        case REMOVE_SELECTED_FOOD:
            let newArrayOfFood = state.list.filter(foodId => foodId !== action.content);
            return Object.assign({}, state, { list: newArrayOfFood });
            
        case ADD_LIST_TO_MEALS:
            let newMeal = action.content;
            let newMealName = action.content.mealName;

            let listOfMealsNames = [...state.predefinedMealsNames, newMealName ]
            let newListOfMeals = [...state.meals, newMeal];
            return Object.assign({}, state, { list: [], meals: newListOfMeals, predefinedMealsNames: listOfMealsNames});

        case SHOW_MEAL_DETAILS:
            let yourMeal = action.content;
            return Object.assign({}, state, {selectedMeal: yourMeal });
        default:
            return state;
    }
}