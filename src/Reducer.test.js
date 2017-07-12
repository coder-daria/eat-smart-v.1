import reducer from './Reducer.js';
import * as actions from './Actions';
import { createStore } from 'redux';

let initialState;
let store;

beforeEach(() => {
    initialState = {foods: [], selected: {}, list: []};
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
    let action = actions.newFood({name: "jamon"});

    let newState = reducer(initialState, action);
    let newNumberOfFoods = newState.foods.length;

    expect(newState).not.toEqual(initialState);
    expect(newNumberOfFoods).toEqual(initialState.foods.length + 1);
    expect(newState.foods[newNumberOfFoods - 1].name).toEqual("jamon");
});

it('handles SELECT_FOOD', () => {
    let action = actions.selectFood({name: "jamon"});

    let newState = reducer(initialState, action);

    expect(newState).not.toEqual(initialState);
    expect(newState.selected.name).toEqual("jamon");
});

it('handles ADD_SELECTED_FOOD', () => {
    let action = actions.addSelectedFood({name: "jamon"}); //{type: ADD_SELECTED_FOOD, content: {name: "jamon"}}

    let newState = reducer(initialState, action); // reducer({foods: [], selected: {}, list: []}, action)
    
    expect(newState).not.toEqual(initialState);
    expect(newState.list[0].name).toEqual("jamon");
    expect(newState.list.length).toEqual(initialState.list.length + 1);
});

it('handles REMOVE_SELECTED_FOOD', () => {
    initialState = {foods: [], selected: {}, list: [{name: "jamon"}]};
    let action = actions.removeSelectedFood("jamon");

    let newState = reducer(initialState, action);
    
    expect(newState).not.toEqual(initialState);
    expect(newState.list.length).not.toEqual(initialState.list.length);
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