import React, { Component } from 'react';
import './App.css';
import Chart from './Chart';
import SearchContainer from './SearchContainer';
import AddNewProductContainer from "./AddNewProductContainer";
import { fetchProducts, convertToArray } from './functions.js';
import reducer from './Reducer';

class App extends Component {
  
  render() {
    const state = {items: convertToArray(fetchProducts())};
    const dispatch = (action) => {
      const newState = reducer(state, action);
      console.log('now redux would update state with newState');
    }
    return (
      <div>
        <SearchContainer state={state} />
        <AddNewProductContainer dispatch={dispatch} state={state}/>
      </div>
    );
  }
}

export default App;
