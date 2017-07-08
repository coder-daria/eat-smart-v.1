import React, { Component } from 'react';
import './App.css';
import Chart from './Chart';
import SearchContainer from './SearchContainer';
import AddNewProductContainer from "./AddNewProductContainer";
import FoodDetailsContainer from "./FoodDetailsContainer";
import ListOfFoodContainer from "./ListOfFoodContainer";
class App extends Component {
  
  render() {
    return (
      <div>
        <SearchContainer />
        <AddNewProductContainer/>
        <FoodDetailsContainer/>
        <ListOfFoodContainer />
      </div>
    );
  }
}

export default App;
