import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { lazy, Suspense } from 'react';

import Home from "./Home";
// import About from "./About";
import Products from "./Products";
import ProductDetails from "./ProductDetails";

const About = lazy(() => import('./About'));

function App() {
  const AboutwithSuspense = () => {
    return (
      <Suspense fallback={<p>Loading...</p>}>
        <About />
      </Suspense>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <AboutwithSuspense />
    },
    {
      path: '/products',
      element: <Products />
    }, {
      path: '/products/:productId',
      element: <ProductDetails />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
