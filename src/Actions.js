export const NEW_PRODUCT = "NEW_PRODUCT";
export const SELECT_FOOD = "SELECT_FOOD";

export function newProduct(product){
    return {type: NEW_PRODUCT, content: product};
}

export function selectFood(food) {
    return {type: SELECT_FOOD, content: food};
}
