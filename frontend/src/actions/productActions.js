import axios from 'axios';
import { FETCH_PRODUCTS, FETCH_PRODUCT } from './types';

export const fetchProducts = () => async dispatch => {
  try {
    const res = await axios.get('/api/products');
    dispatch({ type: FETCH_PRODUCTS, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

export const fetchProduct = (id) => async dispatch => {
  try {
    const res = await axios.get(`/api/products/${id}`);
    dispatch({ type: FETCH_PRODUCT, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};
