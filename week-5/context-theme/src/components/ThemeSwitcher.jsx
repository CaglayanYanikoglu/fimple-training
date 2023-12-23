/* eslint-disable react/prop-types */
import withTheme from "../hoc/withTheme";

const ThemeSwitcher = ({theme, toggleTheme}) => {
  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? <span>🌞</span> : <span>🌙</span>}
    </button>
  );
};

export default withTheme(ThemeSwitcher);
