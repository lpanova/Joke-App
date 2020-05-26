import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import jokeReducer from './jokeReducer';

export default combineReducers({
  counter: counterReducer,
  joke: jokeReducer
});
