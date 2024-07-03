import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={() => <AuthForm isRegister={true} />} />
        <Route path="/login" component={() => <AuthForm isRegister={false} />} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="/" component={ProductList} />
      </Switch>
    </Router>
  );
};

export default App;
