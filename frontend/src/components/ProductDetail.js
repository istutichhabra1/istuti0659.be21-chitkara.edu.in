import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.item);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      {product && (
        <>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
