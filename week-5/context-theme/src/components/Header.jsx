import { useContext } from "react";

import Navbar from "./Navbar";
import ThemeSwitcher from "./ThemeSwitcher";
// import ThemeContext from "../context/ThemeContext";

const Header = () => {
  // const contextData = useContext(ThemeContext);
  return (
    <header>
      <Navbar />
      <ThemeSwitcher />
    </header>
  )
};

export default Header;
