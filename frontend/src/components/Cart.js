import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      {cartItems.map(item => (
        <div key={item._id}>
          <h2>{item.name}</h2>
          <button onClick={() => handleRemoveFromCart(item._id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
