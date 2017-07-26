import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './Reducer'

const configureStore = (initialState) => {

  const logger = store => next => action => {
    //   console.log('dispatching', action)
    let result = next(action)
    //   console.log('next state', store.getState())
    return result
  }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  let store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(logger)));

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept('./Reducer', () => {
        store.replaceReducer(reducer)
      })
    }
  }

  return store
}

export default configureStore