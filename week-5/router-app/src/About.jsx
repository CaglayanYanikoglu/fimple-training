import { Link, useLocation, useNavigate } from "react-router-dom";

const About = () => {
  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();

  const goHome = () => {
    if (window.confirm('Do you want to go home')) {
      navigate('/');
      navigate(-1); // go back
    }
  }
  return (
    <div>
      About Page
      <div>
        {/* <a href="http://localhost:5173/about">About</a> */}
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div>
        <button onClick={goHome}>
          Go Home Button
        </button>
      </div>
    </div>
  )
};

export default About;