// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers,applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

// internal modules
import App from './components/app';

import messagesReducer from './reducers/messages_reducer';
import channelsReducer from './reducers/channels_reducer';

const channels = JSON.parse(chat_app.dataset.channels).map(c => c.name)
// State and reducers
const initialState = {
  messages: [],
  channels: channels
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
});

const middleWares = applyMiddleware(logger, reduxPromise)
// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers,initialState,middleWares)}>
    <Router history={history}>
      <Switch>
        <Route path='/channels/:channel' component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('chat_app')
);