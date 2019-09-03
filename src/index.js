import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import App from './App';
// import Layout from './Layout';
import IRouter from './router'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import iniStore from './redux/store'

const store = iniStore()
ReactDOM.render(
  <Provider store={store}>
    <IRouter />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
