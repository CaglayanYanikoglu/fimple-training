import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { getPostDetail } from '../services';
import withLoading from '../hoc/withLoading';

// const PostDetail = (props) => {
// const PostDetail = ({setLoading}) => {

const PostDetail = (props) => {
  const { setLoading } = props; // object destructing

  const { postId } = useParams();

  const navigate = useNavigate();

  const [post, setPost] = useState({});

  const fetchDetail = async () => {
    try {
      setLoading(true);
      const res = await getPostDetail(postId);
      setPost(res.data)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <div>
      <Link to="/">Home</Link>
      {/* <div>
        <button onClick={() => navigate('/')}>Go to home page</button>
      </div> */}
      <h2>{post.title}</h2>
      <p>{post.body}</p>

    </div>
  );
};

export default withLoading(PostDetail, '#aaa');
// export default PostDetail;
