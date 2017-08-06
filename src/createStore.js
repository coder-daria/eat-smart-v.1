import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { reducer as form } from 'redux-form'
import FoodsReducer from './Reducer';
import { convertFoodsFromServer } from './functions';
import server from './server/serverMock';
import * as actions from './Actions';
import thunk from 'redux-thunk';

const configureStore = () => {

  const logger = store => next => action => {

    //   console.log('dispatching', action)
    let result = next(action)
    //   console.log('next state', store.getState())
    // return result
  }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const rootReducer = combineReducers({foods: FoodsReducer, form});
  let store = createStore(rootReducer, undefined, composeEnhancers(applyMiddleware(logger, thunk)));

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept('./Reducer', () => {
        store.replaceReducer(rootReducer)
      })
    }
  }

  return store
}

const addFoodToServer = store => next => action => {
  switch (action.type) {
    case actions.NEW_FOOD:
      store.dispatch(actions.isLoading(true));

      const fetchOptions = { mode: 'cors', method: 'GET' };
      fetch('http://localhost:3001', fetchOptions)
        .then(data => data.json())
        .then(data => {
          console.log(`the server says ${data}`);
          const newFoodFromServer = callServerAndConvertForUi(action.content);

          action.content = newFoodFromServer;
          next(action);
          store.dispatch(actions.isLoading(false));
        });

      break;
    default:
      next(action);
    //   console.log('next state', store.getState();
  }
}

function callServerAndConvertForUi(foodFromUi) {
  let newFoodInServer = server.addNewFood(foodFromUi);
  return convertFoodsFromServer(newFoodInServer);
}


export default configureStore