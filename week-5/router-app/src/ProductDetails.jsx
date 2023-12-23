import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  // const params = useParams();
  const { productId } = useParams();
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const goBack = () => {
    navigate(-1);
  }

  return (
    <div>
      <h1>
        Product Detail
      </h1>
      <Link to={"/products"}>Go to Products</Link>
      <button onClick={goBack}>Go to back</button>
      <p>{product.title}</p>
      <img width={100} height={100} src={product.image} />
    </div>
  )
}

export default ProductDetails;
