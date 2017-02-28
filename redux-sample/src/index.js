import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CounterContainer from './containers/counter';
import store from './store/store';

const main = (
  <Provider store={store}>
    <CounterContainer />
  </Provider>
);

ReactDOM.render(main, document.getElementById('root'));