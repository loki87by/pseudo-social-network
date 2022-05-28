import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ProptectedRouteProps } from "../../utils/types";

const ProtectedRoute: React.FC<ProptectedRouteProps> = ({ component: Component, ...props  }) => {
  return (
  <Route>
  {
  () => props.dataLoaded || props.dataLoading ? <Component {...props} /> : <Redirect to="/" />
  }
  </Route>
  )}
  export default ProtectedRoute;