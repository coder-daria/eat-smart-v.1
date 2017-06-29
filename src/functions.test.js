import { caloriesPerDay, countGrams } from './functions';

it('counts calories', () => {
    expect(caloriesPerDay(2000, 20, 30, 50)).toEqual({
        fat: 400,
        proteins: 600,
        carbs: 1000
    });
});

it('counts grams', () => {
    expect(countGrams({
        fat: 400,
        proteins: 600,
        carbs: 1200
    })).toEqual({
        fat: 44,
        proteins: 150,
        carbs: 300
    })
})

it('creates an aliment object', () => {
    expect(aliment(2, 6, 51)).toEqual({
        fat: 18,
        proteins: 24,
        carbs: 204
    })
})

it('creates a portion object', () => {
    expect(portion({
        fat: 2,
        proteins: 6,
        carbs: 51
    }, 300)).toEqual({
        fat: 6,
        proteins: 18,
        carbs: 153
    })
})