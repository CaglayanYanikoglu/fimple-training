import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <Link to="/dashboard">Go to dashboard</Link>
      </div>
    </div>
  );
};

export default Home;
