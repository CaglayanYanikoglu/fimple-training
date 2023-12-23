import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Home from "./components/Home";
import PostDetail from "./components/PostDetail";

import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home pageName="home" />,
  }, {
    path: 'posts/:postId',
    element: <PostDetail />
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
