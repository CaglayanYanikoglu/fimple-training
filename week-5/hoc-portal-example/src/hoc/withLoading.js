import React, { useState } from 'react';

import Loading from '../components/Loading';

const withLoading = (WrappedComponent, color = '#ff00ff') => {
  return props => {
    console.log('props, ', props);
    const [loading, setLoading] = useState(false);
    const name = "Patika";
    return (
      <>
        {loading && (
          <Loading color={color} />
        )}
        <WrappedComponent setLoading={setLoading} name={name} {...props} />
      </>
    );
  }
};

export default withLoading;