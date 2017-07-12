import * as products from './products';

function listAllProducts(){
    for(let product in products){
        products[product].id = hashCode(product);
    }
    return products;
}

function hashCode(s){
  return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
}

const exports = {listAllProducts};
export default exports;