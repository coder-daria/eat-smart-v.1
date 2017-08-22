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