import React, { Component } from 'react';
import './App.css';
// import Chart from './Chart';
import SearchContainer from './features/search/SearchContainer';
import AddFoodContainer from "./features/addFood/AddFoodContainer";
import MealContainer from "./features/addMeal/MealContainer";
import MealsDetailsContainer from "./features/mealDetails/MealsDetailsContainer";
import EditFoodContainer from './features/editFood/EditFoodContainer';
import PreferencesFormContainer from './features/preferences/PreferencesFormContainer';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Nav from './Nav';
import Time from './Time';
import Date from './Date';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <Router>
        <div className='container'>
          <Time/>
          <Date />
          <br/><br/>
          <Nav />
          <Route path='/addFood' component={AddFoodContainer} />
          <Route path='/editFood' component={EditFoodContainer} />
          <Route path="/addMeal" component={SearchContainer} />
          <Route path="/addMeal" component={MealContainer} />
          <Route path="/mealsDetails" component ={MealsDetailsContainer} />
          <Route path="/preferences" component={PreferencesFormContainer} />
        </div>
      </Router>
=======
      <MuiThemeProvider>
        <Router>
          <div className='container'>
            <Time />
            <Date />
            <br /><br />
            <Nav />
            <Route path='/addFood' component={AddNewProductContainer} />
            <Route path='/editFood' component={EditFoodContainer} />
            {/*<Route path="/selectedFood" component={FoodDetailsContainer} />*/}
            <Route path="/addMeal" component={SearchContainer} />
            <Route path="/addMeal" component={MealContainer} />
            <Route path="/mealsDetails" component={MealsDetailsContainer} />
            <Route path="/preferences" component={PreferencesFormContainer} />
          </div>
        </Router>
      </MuiThemeProvider>
>>>>>>> fixing conflict by  adding changes
    );
  }
}

export default App;