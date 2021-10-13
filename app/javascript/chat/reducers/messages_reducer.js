import { GET_MESSAGES, POST_MESSAGE } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case GET_MESSAGES: 
      return action.payload;
    case POST_MESSAGE:
      // make copy of state non-multible
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    default:
      return state;
  }
}