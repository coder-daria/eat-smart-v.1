import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import FoodsReducer from './reducers/Foods';
import PreferencesReducer from './reducers/Preferences';
import MealsReducer from './reducers/Meals';
import PageChangesReducer from './reducers/PageChanges';
import FoodListReducer from './reducers/FoodList';
import thunk from 'redux-thunk';

const configureStore = () => {
  const logger = store => next => action => {
    //   console.log('dispatching', action)
    next(action);
    //   console.log('next state', store.getState())
    // return result
  };

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const rootReducer = combineReducers({
    foods: FoodsReducer,
    preferences: PreferencesReducer,
    meals: MealsReducer,
    pagechanges: PageChangesReducer,
    foodList: FoodListReducer,
    form: form
  });

  let store = createStore(
    rootReducer,
    undefined,
    composeEnhancers(applyMiddleware(logger, thunk))
  );

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./reducers/Foods', () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  return store;
};

export default configureStore;
