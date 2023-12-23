import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>
        Home Page
      </h1>
      <div>
        {/*   <a href="http://localhost:5173/about">About</a> */}
      </div>
      <div>
         <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">See Products</Link>
      </div>
    </div>
  )
};

export default Home;