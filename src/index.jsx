import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

import Hello from './components/hello.jsx'


const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}
