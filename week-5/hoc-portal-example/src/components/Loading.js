import React from 'react';
import { ThreeDots } from 'react-loader-spinner'
import PropTypes from 'prop-types';

const Loading = ({
  color
}) => {
  console.log('color:', color)
  return (
    <div className="loading-wrapper">
      <ThreeDots
        height="120"
        width="120"
        radius="9"
        color={color}
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

Loading.propTypes = {
  color: PropTypes.string
}

Loading.defaultProps = {
  color: '#ddd'
}

export default Loading;
