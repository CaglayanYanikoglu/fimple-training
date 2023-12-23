import React from 'react';
import PropTypes from 'prop-types';

import PostItem from './PostItem';

const Posts = ({
  posts
}) => {
  return (
    <div>
      {posts.map(post => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};

Posts.defaultProps = {
  posts: []
};

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts;
