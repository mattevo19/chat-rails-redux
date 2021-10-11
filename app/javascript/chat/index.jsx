// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers,applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';

import messagesReducer from './reducers/messages_reducer';
import channelsReducer from './reducers/channels_reducer';
import currentUserReducer from './reducers/current_user_reducer'
import selectedChannelReducer from './reducers/selected_channel_reducer';

// State and reducers
const initialState = {
  messages: [
    // {
    //   "author":"anonymous92",
    //   "content":"Hello world!",
    //   "created_at":"2017-09-26T23:03:16.365Z"
    // },
    // {
    //   "author":"anonymous77",
    //   "content":"My name is anonymous77",
    //   "created_at":"2017-09-26T23:03:21.194Z"
    // }
  ],
  channels: [ 'general', 'react', 'berlin' ],
  // currentUser: prompt("What is your username?") || `anonymous${Math.floor((Math.random() * 99))}`,
  currentUser: `anonymous${Math.floor((Math.random() * 99))}`,
  selectedChannel: 'general'
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  currentUser: currentUserReducer,
  selectedChannel: selectedChannelReducer
});

const middleWares = applyMiddleware(logger, reduxPromise)
// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers,initialState,middleWares)}>
    <App />
  </Provider>,
  document.getElementById('chat_app')
);
