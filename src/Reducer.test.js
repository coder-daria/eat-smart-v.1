import reducer from './Reducer.js';
import * as actions from './Actions';
import { createStore } from 'redux';

let initialState;
let store;

beforeEach(() => {
    initialState = {foods: {}, selected: 0, foodsOfNewMeal: [], meals: [], predefinedMealsNames: [], mealsPreferences: []};
    store = createStore(reducer, initialState);
});

it('does not change the state if the action type is unknown', () => {
    let action = {type: 'UNKNOWN', content:{anything: "anything"}};
    // let newState = reducer(initialState, action);
    store.dispatch(action);
    let newState = store.getState();
    
    expect(newState).toEqual(initialState);
});

it('handles NEW_FOOD', () => {
    let action = actions.newFood({name: "jamon", fat: "2", protein: "2", carbs: "2"});
    let newState = reducer(initialState, action); // foods:{321: {name: "jamon"}, }
    
    let keysInFoods = Object.keys(newState.foods); //array
    let newNumberOfFoods = keysInFoods.length; //1

    expect(newState).not.toEqual(initialState);
    expect(newNumberOfFoods).toEqual(1);
    expect(newState.foods[keysInFoods[0]].name).toEqual("jamon");

});

it('handles SELECT_FOOD', () => { //done
    let action = actions.selectFood(73534323);
    let newState = reducer(initialState, action);

    expect(newState).not.toEqual(initialState);
    expect(newState.selected).toEqual(73534323);
});

it('handles ADD_SELECTED_FOOD', () => {
    let action = actions.addSelectedFood(73534323);
    let newState = reducer(initialState, action);
    
    expect(newState).not.toEqual(initialState);
    expect(newState.foodsOfNewMeal[0]).toEqual(73534323);
    expect(newState.foodsOfNewMeal.length).toEqual(initialState.foodsOfNewMeal.length + 1);
});


it('handles REMOVE_SELECTED_FOOD', () =>{
    initialState = {foods: {}, selected: 73534323, foodsOfNewMeal: [73534323], meals: [], predefinedMealsNames: [], mealsPreferences: []};
    let action = actions.removeSelectedFood(73534323);
    let newState = reducer(initialState, action);
    
    expect(newState).not.toEqual(initialState);
    expect(newState.foodsOfNewMeal.length).not.toEqual(initialState.foodsOfNewMeal.length);
    expect(newState.foodsOfNewMeal[0]).toEqual(undefined);
});

xit('handle SHOW_MEAL_DETAILS', () => {
    initialState = {...initialState, selectedMeal: {}};
    
    let action = actions.showMealDetails({mealname: "jamon", details: [73534323, 1426331547] });
    let newState = reducer(initialState, action);

    expect(newState).not.toEqual(initialState);
    expect(newState.selectedMeal.mealname).not.toEqual("jamon");
    expect(newState.selectedMeal.details.length).not.toEqual(2);
});

it('handle ADD_PREFERENCE', () => {
    let action = actions.addPreference({name: "breakfast", seconds: 12});
    let newState = reducer(initialState, action);

    expect(newState).not.toEqual(initialState);
    expect(newState.mealsPreferences.length).not.toEqual(initialState.mealsPreferences.length);
    expect(newState.mealsPreferences[0].name).toEqual("breakfast");
    expect(newState.mealsPreferences[0].seconds).toEqual(12);
});

xit('TEMPLATE', () => {
    let action = {};

    let newState = reducer(initialState, action);

    expect(newState).not.toEqual(initialState);
});


xit('THINGS TO DO', () => {
    // console.error("BUG: NOT CHOOSING A TIME IN PREFERED MEAL BREAKS THE APP");
    // console.error("USE TIMESTAMP");
    // console.error("SHOW TIME OF PREFERENCES MEAL");
    // console.error("FIX TEST ADD_PREFERENCE");
    console.error("EDIT EXISTING FOOD");
    // console.error("SHOW TIME (STATIC - doesnt change)");
    // console.error("extra points(+100): update the time every second");

    fail();
})




// expect(newState.foods.length).toEqual(y);
// state.foods.push(1);
// expect(newState.foods.length).toEqual(y);

// expect(state.foods.length).toEqual(x);
// newState.foods.push(1);
// expect(state.foods.length).toEqual(x);