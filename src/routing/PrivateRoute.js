import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
  const { component: Components, ...rest } = props;
  const authenticated = useSelector((state) => state.auth.authenticated);
  return (
    <Route
      {...rest}
      render={(props) =>
        !authenticated ? <Redirect to='/login' /> : <Components {...props} />
      }
    />
  );
};

export default PrivateRoute;
