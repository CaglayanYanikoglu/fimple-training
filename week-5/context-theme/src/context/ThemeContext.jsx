/* eslint-disable react/prop-types */
import { useState, createContext } from "react";

const ThemeContext = createContext();
export default ThemeContext;

export const ThemeProvider = ({children}) => {
  // const { children } = props;
  const [theme, setTheme] = useState(localStorage.getItem('theme') );

  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem('theme', 'dark');
      setTheme("dark");
    } else {
      setTheme("light");
      localStorage.setItem('theme', 'light');
    }
  };

  // global state
  const value = {
    theme,
    toggleTheme,
    name: 'Patika',
    age: 28
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

