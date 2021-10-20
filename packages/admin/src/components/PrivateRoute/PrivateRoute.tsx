import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface PrivateRouteProps {
  component: any;
  path: string;
}

function PrivateRoute({ component, path }: PrivateRouteProps) {
  // Fake auth
  const auth = {
    user: false,
  };

  return (
    <Route
      path={path}
      render={(props: any) => {
        if (auth.user) {
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
