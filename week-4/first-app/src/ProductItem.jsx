import React from 'react';

const ProductItem = ({
  data, user
}) => {
  console.log('product item is rendered');
  return (
    <li className="product-item">
      <img src={data.image} />
      <span>{data.title}</span>
    </li>
  )
};

export default React.memo(ProductItem);
