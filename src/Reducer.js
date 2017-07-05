import {NEW_PRODUCT} from './Actions';

export default function reducer(state, action) {
    switch (action.type) {
        case NEW_PRODUCT:
            console.log(`we have ${state.items.length} items`);
            const newState = {items: [...state.items, action.content]}; 
            console.log(`we have ${newState.items.length} items`);
            return newState;

        default:
            console.log(`action of type ${action.type} received`);
            return state;
    }
}

