import { NEW_FOOD, SELECT_FOOD, ADD_SELECTED_FOOD, REMOVE_SELECTED_FOOD, ADD_LIST_TO_MEALS } from './Actions';

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
            let list = state.list;
            let meals = [...state.meals, ...list];
            return Object.assign({}, state, {list: [], meals: meals});
        default:
            return state;
    }
}

