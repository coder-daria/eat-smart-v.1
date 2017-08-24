import React, { Component } from 'react';
import './App.css';
import AddFoodContainer from "./features/addFood/AddFoodContainer";
import MealParentContainer from "./features/addMeal/MealParentContainer";
import EditFoodContainer from './features/editFood/EditFoodContainer';
import PreferencesParentContainer from './features/preferences/PreferencesParentContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Time from './Time';
import DayPickerContainer from './features/changeDate/DayPickerContainer';
import MenuIcon from './MenuIcon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TimeFor from './TimeFor';
import LinearProgressBar from './common/LinearProgress';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

class App extends Component {
  render() {
    let loading = this.props.isLoading ? <LinearProgressBar /> : null;
    return (
      <div>
        <MuiThemeProvider>
          <Router>
            <div className="appContainer">
              {loading}
              <div className="header">
                <div>
                  <Time />
                </div>
                <div>
                  <TimeFor />
                </div>
                <div>
                  <DayPickerContainer />
                </div>
                <div>
                  <MenuIcon />
                </div>
              </div>
              <div className="body">
                <Nav />
                <br />
                <Route path='/addFood' component={AddFoodContainer} />
                <Route path='/editFood' component={EditFoodContainer} />
                <Route path="/addMeal" component={MealParentContainer} />
                <Route path="/preferences" component={PreferencesParentContainer} />
              </div>
            </div>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;