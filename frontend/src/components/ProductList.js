import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      {products.map(product => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <Link to={`/product/${product._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
