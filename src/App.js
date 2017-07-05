import React, { Component } from 'react';
import './App.css';
import Chart from './Chart';
import SearchContainer from './SearchContainer';
import AddNewProductContainer from "./AddNewProductContainer";
import FoodDetailsContainer from "./FoodDetailsContainer";

class App extends Component {
  
  render() {
    return (
      <div>
        <SearchContainer />
        <AddNewProductContainer/>
        <FoodDetailsContainer/>
      </div>
    );
  }
}

export default App;
