import reducer from './Foods.js';
import * as actions from '../../Actions';
import { createStore } from 'redux';

let initialState;
let store;

beforeEach(() => {
    initialState = { foods: {}, foodsBeingAddedToNewMeal: [], meals: [], preferences: { kcal: 0, meals: [] } };
    store = createStore(reducer, initialState);
});

it('does not change the state if the action type is unknown', () => {
    let action = { type: 'UNKNOWN', content: { anything: "anything" } };
    store.dispatch(action);
    let newState = store.getState();

    expect(newState).toEqual(initialState);
});

it('handles NEW_FOOD', () => {
    let action = actions.newFood({
        101: {
            name: "honey",
            fat: "0", protein: "0", carbs: "40", id: 101
        }
    });

    let newState = reducer(initialState, action); // foods:{101: {name: "honey"}, }

    let keysInFoods = Object.keys(newState.foods); //array [101]
    let newNumberOfFoods = keysInFoods.length; //1

    expect(newState).not.toEqual(initialState);
    expect(newNumberOfFoods).toEqual(1);
    expect(newState.foods[keysInFoods[0]].name).toEqual("honey");

});

it('handles ADD_SELECTED_FOOD', () => {
    let action = actions.addSelectedFood(73534323);
    let newState = reducer(initialState, action);

    expect(newState).not.toEqual(initialState);
    expect(newState.foodsBeingAddedToNewMeal[0]).toEqual({ id: 73534323 });
    expect(newState.foodsBeingAddedToNewMeal.length).toEqual(initialState.foodsBeingAddedToNewMeal.length + 1);
});


it('handles REMOVE_SELECTED_FOOD', () => {
    initialState = { foods: {}, foodsBeingAddedToNewMeal: [{ id: 73534323 }, { id: 73534324 }] };
    let action = actions.removeSelectedFood(73534323);
    let newState = reducer(initialState, action);

    expect(newState).not.toEqual(initialState);
    expect(newState.foodsBeingAddedToNewMeal.length).not.toEqual(initialState.foodsBeingAddedToNewMeal.length);
    expect(newState.foodsBeingAddedToNewMeal.length).toEqual(1);
    expect(newState.foodsBeingAddedToNewMeal[0].id).toEqual(73534324);
});
it('handle ADD_FOODS_OF_NEW_MEAL_TO_MEALS', () => {
    let action = actions.addFoodsOfNewMealToMeals({
        meal: "breakfast", foods: [
            { name: "jamonCuradoBodega", id: "ff13607c-0e74-4176-9407-cb27e196eff1", units: "grams", quantity: "12" },
            { name: "twarogChudyMlekpol", id: "ae973f2a-f7e1-4ad5-b6ed-885e8aee399b", units: "grams", quantity: "15" }
        ]
    }, "breakfast");
    let newState = reducer(initialState, action);

    expect(newState).not.toEqual(initialState);
    expect(newState.meals[0].details.meal).toEqual("breakfast");
    expect(newState.meals[0].details.foods.length).toEqual(2);
    expect(newState.meals[0].details.foods[0].quantity).toEqual("12");
});

it('handle SHOW_MEAL_DETAILS', () => {
    initialState = {
        ...initialState, selectedMeal: {}, meals: [{
            mealName: "salad",
            details: [928482960, 100888247, 100888247]
        }]
    };

    let action = actions.showMealDetails(initialState.meals[0].mealName);
    let newState = reducer(initialState, action);

    expect(newState).not.toEqual(initialState);
    expect(newState.selectedMeal.mealName).toEqual("salad");
    expect(newState.selectedMeal.details.length).toEqual(3);
    expect(newState.selectedMeal.details[0]).toEqual(928482960);
});

it('handle EDIT_FOOD', () => {
    initialState = {
        ...initialState, foods: {
            100888247: {
                name: "jajko",
                    carbs: "1",
                    fat: "9",
                    id: 100888247,
                    protein: "12"
            }
        }
    }

    let action = actions.editFood({
        name: "jajko",
            carbs: "0",
            fat: "9",
            id: 100888247,
            protein: "12"
    });
    let newState = reducer(initialState, action);

    expect(newState.length).toEqual(initialState.length);
    expect(newState.foods[100888247].carbs).not.toEqual(1);
    expect(newState.foods[100888247].carbs).toEqual("0");
});

it('handle IS_LOADING', () => {
    initialState = { ...initialState, isLoading: false }
    let action = actions.isLoading(true);
    let newState = reducer(initialState, action);

    expect(newState).not.toEqual(initialState);
    expect(newState.isLoading).toEqual(true);
});

xit('TEMPLATE', () => {
    let action = {};

    let newState = reducer(initialState, action);
    expect(newState).not.toEqual(initialState);
});


// expect(newState.foods.length).toEqual(y);
// state.foods.push(1);
// expect(newState.foods.length).toEqual(y);

// expect(state.foods.length).toEqual(x);
// newState.foods.push(1);
// expect(state.foods.length).toEqual(x);