// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers,applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { CreateHistory as history } from 'history';

// internal modules
import App from './components/app';

import messagesReducer from './reducers/messages_reducer';
import channelsReducer from './reducers/channels_reducer';
import currentUserReducer from './reducers/current_user_reducer'

// State and reducers
const initialState = {
  messages: [],
  channels: [ 'general', 'react', 'berlin' ],
  currentUser: `anonymous${Math.floor((Math.random() * 99))}`
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  currentUser: currentUserReducer
});

const middleWares = applyMiddleware(logger, reduxPromise)
// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers,initialState,middleWares)}>
    <Router history={history}>
      <Switch>
        <Route path='/channels/:channel' component={App} />
        {/* <Redirect from='/' to='/channels/general'/> */}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('chat_app')
);