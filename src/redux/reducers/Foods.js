import * as actions from '../../Actions';
import { fetchProducts, convertFoodsFromServer } from '../../functions.js';

const foods = convertFoodsFromServer(fetchProducts());

const initialState = {
    foods: foods
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.NEW_FOOD:
            let newItems = { ...state.foods, ...action.content };
            for (let key in state.foods) {
                if (state.foods[key].name === action.content.name) {
                    return state;
                }
            }

            return Object.assign({}, state, { foods: newItems });

        case actions.EDIT_FOOD:
            let foodID = action.content.id;
            if (state.foods[foodID].id === foodID) {
                state.foods[foodID] = { ...action.content };
            }
            return Object.assign({}, state);

        case actions.IS_LOADING:
            return Object.assign({}, state, { isLoading: action.content });

        default:
            return state;
    }
}