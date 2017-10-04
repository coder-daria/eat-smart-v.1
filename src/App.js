import React, { Component } from 'react';
import './App.css';
import AddFoodContainer from './features/addFood/AddFoodContainer';
import MealParentContainer from './features/addMeal/MealParentContainer';
import EditFoodContainer from './features/editFood/EditFoodContainer';
import PreferencesParentContainer from './features/preferences/PreferencesFormContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserIcon from './UserIcon';
import ChangeLocation from './features/changeLocation/ChangeLocationContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoadingContainer from './common/LoadingContainer';
import SnackbarContainer from './common/SnackbarContainer';
import FoodListContainer from './features/searchFood/FoodListContainer';
import ModalDialogContainer from './features/modal-dialog/ModalDialogContainer';
import AppBar from 'material-ui/AppBar';

// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Router>
            <div className="appContainer">
              <div className="header">
                <AppBar
                  title="Eat Smart"
                  iconElementLeft={<ChangeLocation />}
                  iconElementRight={<UserIcon />}
                />
              </div>
              <div className="body">
                <Switch>
                  <Route path="/addFood" component={AddFoodContainer} />
                  <Route path="/editFood" component={EditFoodContainer} />
                  <Route path="/addMeal" component={MealParentContainer} />
                  <Route
                    path="/preferences"
                    component={PreferencesParentContainer}
                  />
                  <Route path="/searchFood" component={FoodListContainer} />
                  <Route
                    path={`/details/:beerId`}
                    component={ModalDialogContainer}
                  />
                  <Route component={MealParentContainer} />
                </Switch>
              </div>
              <div>
                <LoadingContainer />
              </div>
              <div>
                <SnackbarContainer />
              </div>
            </div>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
