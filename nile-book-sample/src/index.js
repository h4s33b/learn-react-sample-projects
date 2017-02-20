import React from 'react';
import ReactDOM from 'react-dom';
import Index from './main';
import App from './App';
import './index.css';
import {
  hashHistory,
  Router,
  Route,
  IndexRoute,
  Link,
  IndexLink
} from 'react-router';

import Product from './product/product';
import Cart from './cart/cart';
import Modal from './modal/modal';
import Checkout from './checkout/checkout';


const PRODUCTS = [
  {
    id: 0, src: 'https://images-na.ssl-images-amazon.com/images/I/51hwN6Va6RL._SX403_BO1,204,203,200_.jpg',
    title: 'Pro Express.js', url: 'http://amzn.to/1D6qiqk'
  },
  {
    id: 1, src: 'https://images-na.ssl-images-amazon.com/images/I/51hwN6Va6RL._SX403_BO1,204,203,200_.jpg',
    title: 'Practical Node.js', url: 'http://amzn.to/NuQ0fM'
  },
  {
    id: 2, src: 'https://images-na.ssl-images-amazon.com/images/I/51hwN6Va6RL._SX403_BO1,204,203,200_.jpg',
    title: 'Express API Reference', url: 'http://amzn.to/1xcHanf'
  },
  {
    id: 3, src: 'https://images-na.ssl-images-amazon.com/images/I/51hwN6Va6RL._SX403_BO1,204,203,200_.jpg',
    title: 'React Quickly', url: 'https://www.manning.com/books/reactquickly'
  },
  {
    id: 4, src: 'https://images-na.ssl-images-amazon.com/images/I/51hwN6Va6RL._SX403_BO1,204,203,200_.jpg',
    title: 'Full Stack JavaScript', url: 'http://www.apress.com/9781484217504'
  }
]

let cartItems = {};

const addToCart = (id) => {
  if (cartItems[id])
    cartItems[id] += 1
  else
    cartItems[id] = 1
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} products={PRODUCTS}/>
      <Route path="/products/:id" component={Product}
        addToCart={addToCart}
        products={PRODUCTS} />
      <Route path="/cart" component={Cart}
        cartItems={cartItems} products={PRODUCTS} />
    </Route>
    <Route path="/checkout" component={Checkout}
      cartItems={cartItems} products={PRODUCTS} />
  </Router>),
  document.getElementById('root')
);



// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
