export const NEW_FOOD = "NEW_FOOD";
export const SELECT_FOOD = "SELECT_FOOD";
export const ADD_SELECTED_FOOD = "ADD_SELECTED_FOOD";
export const REMOVE_SELECTED_FOOD = "REMOVE_SELECTED_FOOD";

export function newFood(food){
    return {type: NEW_FOOD, content: food};
}

export function selectFood(food) {
    return {type: SELECT_FOOD, content: food}; //the action : action.type and action.content
}

export function addSelectedFood(food) {
    return {type: ADD_SELECTED_FOOD, content: food}
}

export function removeSelectedFood(food) {
    return {type: REMOVE_SELECTED_FOOD, content: food}
}
