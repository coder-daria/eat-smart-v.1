export const NEW_PRODUCT = "NEW_PRODUCT";

export function newProduct(product){
    return {type: NEW_PRODUCT, content: product};
}
