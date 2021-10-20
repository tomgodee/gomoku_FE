import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import values from 'values';
import {
  selectName,
  change,
} from '../../reducers/reduxName';

const ReduxName = () => {
  const name = useSelector(selectName);
  const dispatch = useDispatch();
  // console.log('values', values);

  return (
    <div>
      <input
        value={name}
        onChange={(event) => dispatch(change({ name: event.target.value }))}
      />
    </div>
  );
};

export default ReduxName;
