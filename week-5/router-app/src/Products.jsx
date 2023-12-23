import { useState, useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      console.log(data);
      if (searchParams.get('category')) {
        const filteredData = data.filter(item => item.category === searchParams.get('category'));
        setProducts(filteredData);
      } else {
        setProducts(data);
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchParams]);

  const goToDetail = (id) => {
    // navigate(`${id}`);
    navigate(`/products/${id}`);
    // navigate('location.')
  }

  const handleFilter = (type) => {
    const params = {
      category: type
    };
    setSearchParams(params);
  }

  return (
    <div>
      <h1>
        Products
      </h1>
      <div>
        <button onClick={() => handleFilter('jewelery')}>Jewelery</button>
        <button onClick={() => handleFilter('electronics')}>Electronics</button>
        <button onClick={() => handleFilter('')}>All products</button>
      </div>
      <ul>
        {products.map(product => (
          <li key={product.id} onClick={() => goToDetail(product.id)}>
            <div style={{ display: 'flex', gap: '6px' }}>
              <p >{product.title}</p>
              <img width={40} height={40} src={product.image} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products;
