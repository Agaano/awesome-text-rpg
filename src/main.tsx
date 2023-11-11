
import './index.css';
import React from 'react';
//@ts-ignore;
import ReactDOM from 'react-dom';
import GameComponent from './GameComponent';

ReactDOM.render(
  <React.StrictMode>
    <GameComponent />
  </React.StrictMode>,
  document.getElementById('root')
);
