import { caloriesPerDay, countGrams, aliment, portion, fetchProducts } from './functions';

it('counts calories', () => {
    expect(caloriesPerDay(2000, 20, 30, 50)).toEqual({
        fat: 400,
        protein: 600,
        carbs: 1000
    });
});

it('counts grams', () => {
    expect(countGrams({
        fat: 400,
        protein: 600,
        carbs: 1200
    })).toEqual({
        fat: 44,
        protein: 150,
        carbs: 300
    })
})

it('creates an aliment object', () => {
    expect(aliment(2, 6, 51)).toEqual({
        fat: 18,
        protein: 24,
        carbs: 204
    })
})

it('creates a portion object', () => {
    expect(portion({
        fat: 2,
        protein: 6,
        carbs: 51
    }, 300)).toEqual({
        fat: 6,
        protein: 18,
        carbs: 153
    })
})

it('fetches the products from the server', () => {
    const products = fetchProducts();
    const productsLength = Object.keys(products).length;
    const expectedProducts = 19;
    expect(productsLength).toEqual(19);
})