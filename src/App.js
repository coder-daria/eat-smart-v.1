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
=======
>>>>>>> 363ec1aebf014c95f092865a8672e3914301b483
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
<<<<<<< HEAD
>>>>>>> fixing conflict by  adding changes
=======
>>>>>>> 363ec1aebf014c95f092865a8672e3914301b483
    );
  }
}

export default App;