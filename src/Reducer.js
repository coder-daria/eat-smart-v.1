import { NEW_FOOD, SELECT_FOOD, ADD_SELECTED_FOOD, REMOVE_SELECTED_FOOD, ADD_LIST_TO_MEALS, SHOW_MEAL_DETAILS } from './Actions';

export default function reducer(state, action) {
    switch (action.type) {
        case NEW_FOOD:
            let newItems = [...state.items, action.content];;
            for (var key in state.items) {
                if (state.items[key].name === action.content.name) {
                    return state;
                }
            }
            return Object.assign({}, state, { items: newItems });
        case SELECT_FOOD:
            return Object.assign({}, state, { selected: action.content });
        case ADD_SELECTED_FOOD:
            let foodArray = [...state.list, action.content];
            return Object.assign({}, state, { list: foodArray });
        case REMOVE_SELECTED_FOOD:
            let newArrayOfFood = state.list.filter(food => food.name !== action.content);
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