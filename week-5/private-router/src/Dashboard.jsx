import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <Link to="/">Go to home</Link>
      </div>
    </div>
  );
};

export default Dashboard;
