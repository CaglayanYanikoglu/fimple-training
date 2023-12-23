import axios from 'axios';

export const getAllPosts = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
}

export const getPostDetail = id => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
}