import React from 'react';
import ReduxCounter from '../../components/ReduxCounter';
import ReduxName from '../../components/ReduxName';

const Redux = (props: any) => {
  console.log(props);
  return (
    <div>
      <ReduxCounter />
      <ReduxName />
    </div>
  );
};

export default Redux;
