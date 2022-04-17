import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js'; //free버전의 모든 것을 import

//react-dom에서 .render을 통해서 id root를 가져와서 div id root에 Root component 호출
//Root의 상위에 있는 App이라는 컴포넌트에 연결하는 것이다.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

