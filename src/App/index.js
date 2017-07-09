import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { getCurrentPage } from 'store/selectors';
import { onSwitchPage, onPushPage } from 'store/actions';
import ListFriends from 'pages/ListFriends';
import ListFriendsAgain from 'pages/ListFriendsAgain';

const App = ({ history, currentPage, onClick, onPush }) => {
  console.log('history', history);
  console.log('other props', currentPage, onClick, onPush);
  const jsxRequiresConnect = (
    <div
      onClick={() => {
        onClick(currentPage);
        onPush(currentPage);
        }
      }
    >
      Click Me!
    </div>
  );
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={ListFriends} />
        <Route exact path="/again" component={ListFriendsAgain} />
        {jsxRequiresConnect}
      </div>
    </ConnectedRouter>
  );
};

/*
 * withRouter is not required with ConnectedRouter - if used, throws 'Uncaught TypeError: Cannot read property 'route' of undefined'
 *
 * include history, first parameter and attribute on ConnectedRouter...
 *   otherwise, throws 
 *    'Uncaught TypeError: Cannot read property 'route' of undefined' OR
 *    'bundle.js:30985 Uncaught TypeError: Cannot read property 'listen' of undefined'
 *
 * to fix, include history, first parameter and attribute on ConnectedRouter AND do not use withRouter
 */
export default 
//  withRouter(
    connect(
  (state) => {
    return {
      currentPage: getCurrentPage(state)
    }
  },
  { 
    onClick: onSwitchPage,
    onPush: onPushPage,
  }
)(App)
//)
  ;

//export default App;
