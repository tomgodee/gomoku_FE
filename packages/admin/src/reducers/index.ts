import { combineReducers } from 'redux';
import reduxCounter from './reduxCounter';
import reduxName from './reduxName';

const reduxRootReducer = combineReducers({
  reduxCounter,
  reduxName,
});

export {
  reduxCounter,
  reduxName,
};

export default reduxRootReducer;
