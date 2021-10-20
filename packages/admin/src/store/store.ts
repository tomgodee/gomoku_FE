import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/reduxCounter';
import nameReducer from '../reducers/reduxName';

export default configureStore({
  reducer: {
    counter: counterReducer,
    name: nameReducer,
  },
});
