/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ Component, isAuthenticated, ...props }) => {
  console.log('isAuthenticated', isAuthenticated);
  return isAuthenticated ? <Component {...props} /> : <Navigate to="/login" replace />;
};
export default PrivateRoute;