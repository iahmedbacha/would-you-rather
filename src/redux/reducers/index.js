import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';
import authedUser from './authedUser';
import users from './users';
import questions from './questions';

export default combineReducers({
  users,
  questions,
  authedUser,
  loadingBar,
});
