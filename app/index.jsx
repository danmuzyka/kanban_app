import './main.css';

import 'array.prototype.findindex';
import React from 'react';
import App from './components/App.jsx';

main();

function main() {
  const app = document.createElement('div');
  document.body.appendChild(app);
  React.render(<App />, app);
}

//require('./main.css');
//
//var component = require('./component');
//var app = document.createElement('div');
//
//document.body.appendChild(app);
//app.appendChild(component());