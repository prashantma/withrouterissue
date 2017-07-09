import { applyMiddleware, combineReducers, createStore, compose } from 'redux';  
import { routerReducer, routerMiddleware } from 'react-router-redux'
import friends from './reducers';

const configureStore = (history) => {
  // Build the middleware for intercepting and dispatching navigation actions
  const middleware = routerMiddleware(history)

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // Add the reducer to your store on the `router` key
  // Also apply our middleware for navigating
  const store = createStore(
    combineReducers({
      friends,
      router: routerReducer
    }),
    composeEnhancers(applyMiddleware(middleware))
  )

  return store;
};

export default configureStore;
