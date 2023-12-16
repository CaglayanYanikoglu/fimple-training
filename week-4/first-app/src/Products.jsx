import React, { useState, useEffect } from "react";
import ProductItem from './ProductItem';

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAllowtoSee, setIsAllowtoSee] = useState(false);
  const [counter, setCounter] = useState(0);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://fakestoreapi.com/products');
      const responseData = await res.json();
      setData(responseData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  console.log('products is rendered');

  useEffect(() => {
    fetchData();
  }, []);

  /*   if (loading) {
      return <p>Loading...</p>
    } */

  const user = { name: 'caglayan' };

  return (
    <>
      <div className="container">
        <h2>Products</h2>
        <button onClick={() => setCounter(counter + 1)}>Increase</button>
        {/* {loading && <p>Loading...</p>} */}
        {loading ? <p>Loading...</p> : (
          <ul className="products">
            {/* {data.map((item) => (
              <React.Fragment key={item.id}>
                <li >
                  <p key={`products-${item.id}`}>Item: {item.title}</p>
                </li>
                <span>Element title: {item.title}</span>
              </React.Fragment>
            ))} */}
            {data.map(item => (
              <ProductItem key={item.id} data={item} user={user} />
            ))}
            {/* {data.map(item => {
            console.log(item);
            return (
              <p key={`products-${item.id}`}>Item: {item.title}</p>
            )
          })} */}
          </ul>
        )}
      </div>
      <div>
        Second div
      </div>
    </>
  );
};

export default Products;
