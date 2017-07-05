const NEW_PRODUCT = "new_product";

export function newProduct(product){
    return {type: NEW_PRODUCT, content: product};
}
