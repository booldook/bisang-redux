import { combineReducers } from 'redux';
import authReducer from './auth-reducer';
import commentReducer from './comment-reducer';

const reducer = combineReducers({
  auth: authReducer,
  comment: commentReducer,
});

export default reducer;