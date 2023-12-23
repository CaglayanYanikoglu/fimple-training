import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PostItem = ({
  post
}) => {
  return (
    <div >
      <p>
        <Link to={`posts/${post.id}`}>{post.title}</Link>
      </p>
    </div>
  );
};

PostItem.defaultProps = {
  post: {}
};

PostItem.propTypes = {
  post: PropTypes.object
}

export default PostItem;
