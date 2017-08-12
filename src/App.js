import React, { Component } from 'react';
import './App.css';
import Chart from './Chart';
import SearchContainer from './features/search/SearchContainer';
import AddFoodContainer from "./features/addFood/AddFoodContainer";
import MealContainer from "./features/addMeal/MealContainer";
import MealsDetailsContainer from "./features/mealDetails/MealsDetailsContainer";
import EditFoodContainer from './features/editFood/EditFoodContainer';
import PreferencesFormContainer from './features/preferences/PreferencesFormContainer';
import DemoFormContainer from './DemoFormContainer';
import DemoFormArrayContainer from './DemoFormArrayContainer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Nav from './Nav';
import Time from './Time';
import Date from './Date';
import MenuIcon from './MenuIcon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';



const handleSubmit = (values) => { console.log(values) }

class App extends Component {
  render() {
    return (
      <div className="appContainer">
      <MuiThemeProvider>
        <Router>
          <div className="routerContainer">
            <Time />
            <Date />
            <br /><br />
            <Nav />
            <Route path='/addFood' component={AddFoodContainer} />
            <Route path='/editFood' component={EditFoodContainer} />
            <Route path="/addMeal" component={SearchContainer} />
            <Route path="/addMeal" component={MealContainer} />
            <Route path="/mealsDetails" component={MealsDetailsContainer} />
            <Route path="/preferences" component={PreferencesFormContainer} />
            <Route path="/demo" component={DemoFormContainer} />
            <Route path="/demoArray" component={DemoFormArrayContainer} />
          </div>
        </Router>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;