/* eslint-disable react/display-name */
import { useContext } from 'react';

import ThemeContext from '../context/ThemeContext';

const withTheme = (WrappedComponent) => {
  return props => {
    console.log('props, ', props);
    const { theme, toggleTheme} = useContext(ThemeContext);

    return (
      <>
        <WrappedComponent theme={theme} toggleTheme={toggleTheme} {...props} />
      </>
    );
  }
};

export default withTheme;