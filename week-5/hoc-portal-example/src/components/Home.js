import React, { useState, useEffect } from 'react';

import Posts from './Posts';
import PortalExample from './PortalExample';
import { getAllPosts } from '../services';
import withLoading from '../hoc/withLoading';
import Loading from './Loading';

// HOC => with

const Home = ({ setLoading, name, pageName }) => {
  const [posts, setPosts] = useState([]);

  console.log('pageName', pageName);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await getAllPosts();
      if (res.status === 200) {
        setPosts(res.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {/* <Posts posts={posts} /> */}
      <article>
        <ul>
          <li>
            <PortalExample />
          </li>
         {/*  <li>
            <PortalExample />
          </li> */}
        </ul>

      </article>
    </div>
  );
};

/* const HomeWithLoading = withLoading(Home, 'red');

export default HomeWithLoading; */

export default withLoading(Home, 'yellow');
// export default withLoading(Home);
