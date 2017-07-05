import {NEW_PRODUCT, SELECT_FOOD} from './Actions';

export default function reducer(state, action) {
    switch (action.type) {
        case NEW_PRODUCT:
            let newItems = [...state.items, action.content];
            return Object.assign({}, state, {items:newItems});
        case SELECT_FOOD:
            return Object.assign({}, state, {selected: action.content});
        default:
            console.log(`action of type ${action.type} received`);
            return state;
    }
}

