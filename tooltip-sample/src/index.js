import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from './tooltip/tooltip';
import './index.css';

ReactDOM.render(
  <div><Tooltip text="The book you're reading now" pos="top">React Quickly</Tooltip> was published in 2017. Its <Tooltip text="World is Saying">awesome!</Tooltip></div>,
  document.getElementById('root')
);
