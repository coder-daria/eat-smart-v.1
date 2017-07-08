//for an unknown action -> returns the same state
//for NEW_PRODUCT -> new state with new item
//if i Change the oldState (e.g: push or delete from oldState.items) -> newState does NOT change
import reducer from './Reducer.js';
import * as actions from './Actions';
// import items from './index';
// const newState = reducer(state, action);

let initialState;

beforeEach(() => {
    initialState = {items: [], selected: {}, list: []};
});

it('does not change the state if the action type is unknown', () => {
    let action = {type: 'UNKNOWN', content:{anything: "anything"}};
    let newState = reducer(initialState, action);
    expect(newState).toEqual(initialState);
});

it('handles NEW_FOOD', () => {
    let action = actions.newFood({name: "jamon"});

    let newState = reducer(initialState, action);
    let newNumberOfFoods = newState.items.length;

    expect(newState).not.toEqual(initialState);
    expect(newNumberOfFoods).toEqual(initialState.items.length + 1);
    expect(newState.items[newNumberOfFoods - 1].name).toEqual("jamon");
});

it('handles SELECT_FOOD', () => {
    let action = actions.selectFood({name: "jamon"});

    let newState = reducer(initialState, action);

    expect(newState).not.toEqual(initialState);
    expect(newState.selected.name).toEqual("jamon");
});

it('handles ADD_SELECTED_FOOD', () => {
    let action = actions.addSelectedFood({name: "jamon"}); //{type: ADD_SELECTED_FOOD, content: {name: "jamon"}}

    let newState = reducer(initialState, action); // reducer({items: [], selected: {}, list: []}, action)
    
    expect(newState).not.toEqual(initialState);
    expect(newState.list[0].name).toEqual("jamon");
    expect(newState.list.length).toEqual(initialState.list.length + 1);
});

xit('TEMPLATE', () => {
    let action = {};

    let newState = reducer(initialState, action);

    expect(newState).not.toEqual(initialState);
});







// expect(newState.items.length).toEqual(y);
// state.items.push(1);
// expect(newState.items.length).toEqual(y);

// expect(state.items.length).toEqual(x);
// newState.items.push(1);
// expect(state.items.length).toEqual(x);