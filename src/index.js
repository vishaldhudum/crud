// Library
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// Component
import App from './components/App';

// Reducer
import crudReducer from './reducer/crudReducer'

// CSS
import './assets/style/index.css'

import * as serviceWorker from './serviceWorker';

const store = createStore(crudReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
