import React, { Component } from 'react';
import './App.css';
import Chart from './Chart';
import SearchContainer from './SearchContainer';
import AddNewProductContainer from "./AddNewProductContainer";
import FoodDetailsContainer from "./FoodDetailsContainer";
import MealContainer from "./MealContainer";
import MealsDetailsContainer from "./MealsDetailsContainer";
import MealsDetails from "./MealsDetails";
import PreferencesFormContainer from './PreferencesFormContainer';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Route path='/addFood' component={AddNewProductContainer} />
          {/*<Route path="/selectedFood" component={FoodDetailsContainer} />*/}
          <Route path="/addMeal" component={SearchContainer} />
          <Route path="/addMeal" component={MealContainer} />
          <Route path="/mealsDetails" component ={MealsDetailsContainer} />
          <Route path="/preferences" component={PreferencesFormContainer} />
        </div>
      </Router>
    );
  }
}

export default App;