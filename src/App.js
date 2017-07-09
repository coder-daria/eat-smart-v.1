import React, { Component } from 'react';
import './App.css';
import Chart from './Chart';
import SearchContainer from './SearchContainer';
import AddNewProductContainer from "./AddNewProductContainer";
import FoodDetailsContainer from "./FoodDetailsContainer";
import MealContainer from "./MealContainer";
import MealsDetailsContainer from "./MealsDetailsContainer";
import MealsDetails from "./MealsDetails";

class App extends Component {
  render() {
    return (
      <div>
        <SearchContainer />
        <AddNewProductContainer/>
        <FoodDetailsContainer/>
        <MealContainer />
        <MealsDetailsContainer />
      </div>
    );
  }
}

export default App;
