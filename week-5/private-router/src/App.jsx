import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Home from './Home';
import Dashboard from './Dashboard';

const App = () => {
  // const isLogin = localStorage.getItem(user.token);
  const [isLogin, setLogin] = useState(false);

  const router = createBrowserRouter([
    { path: "/", element: <PrivateRoute Component={Home} isAuthenticated={isLogin} /> },
    { path: "/dashboard", element: <PrivateRoute Component={Dashboard} isAuthenticated={isLogin} /> },
    { path: "/login", element: <Login isAuthenticated={isLogin} setLogin={setLogin} /> },
    { path: "/test", element: <div>Test page</div> },
  ]);
  return (
    <RouterProvider router={router} />
  );
};

export default App;
