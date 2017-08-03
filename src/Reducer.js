import * as actions from './Actions';

export default function reducer(state, action) {
    switch (action.type) {
        case actions.NEW_FOOD:
            let newItems = {...state.foods, ...action.content};
            for (let key in state.foods) {
                if (state.foods[key].name === action.content.name) {
                    return state;
                }
            }

            return Object.assign({}, state, { foods: newItems });

        case actions.ADD_SELECTED_FOOD:
            let objectWithId = {id: action.content}
            let arrayOfId = [...state.foodsBeingAddedToNewMeal, objectWithId];
            return Object.assign({}, state, { foodsBeingAddedToNewMeal: arrayOfId });

        case actions.REMOVE_SELECTED_FOOD:
            let newArrayOfFoodsId = state.foodsBeingAddedToNewMeal.filter(food => food.id !== action.content);
            return Object.assign({}, state, { foodsBeingAddedToNewMeal: newArrayOfFoodsId });

        case actions.ADD_FOODS_OF_NEW_MEAL_TO_MEALS:
            let newMeal = action.content;

            let newListOfMeals = [...state.meals, newMeal];
            return Object.assign({}, state, { foodsBeingAddedToNewMeal: [], meals: newListOfMeals});

        case actions.SHOW_MEAL_DETAILS:
            let mealName = action.content;
            let yourMeal = {}

            for(let key in state.meals) {
                if(state.meals[key].mealName === mealName) {
                    yourMeal = state.meals[key]
                }
            }
            return Object.assign({}, state, {selectedMeal: yourMeal });

        case actions.ADD_PREFERENCE:
            let preference = action.content;
            let mealsPreferences = [...state.mealsPreferences, preference]
            return Object.assign({}, state, {mealsPreferences: mealsPreferences});

        case actions.EDIT_FOOD:
            let foodID = action.content.properties.id;
             if (state.foods[foodID].properties.id === foodID) {
                state.foods[foodID] = {...action.content};
            }
            return Object.assign({}, state);

        case actions.IS_LOADING:
            return Object.assign({}, state, {isLoading: action.content});

        default:
            return state;
    }
}