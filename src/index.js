import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store';
import App from './App';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

const store = configureStore(history);

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component history={history} />
    </Provider>,
    document.getElementById('root')
  );
};

render(App);
