/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const Login = ({
  setLogin, isAuthenticated
}) => {

  if (isAuthenticated) {
    return (
      <Navigate to="/" replace />
    )
  }

  const handleLogin = () => {
    setLogin(true);
  }

  return (
    <div>
      <h1>Login page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
