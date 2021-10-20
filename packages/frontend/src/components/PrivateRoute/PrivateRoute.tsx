import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ACCESS_TOKEN } from '../../config/localStorage';

interface PrivateRouteProps {
  component: any;
  path: string;
}

function PrivateRoute({ component, path }: PrivateRouteProps) {
  return (
    <Route
      path={path}
      render={(props: any) => {
        if (localStorage.getItem(ACCESS_TOKEN)) {
          return React.createElement(component, props);
        }
        return (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
}

export default PrivateRoute;
