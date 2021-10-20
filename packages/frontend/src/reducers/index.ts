import { combineReducers } from 'redux';
import { userReducer } from './user';

const reduxRootReducer = combineReducers({
  user: userReducer,
});

export default reduxRootReducer;
