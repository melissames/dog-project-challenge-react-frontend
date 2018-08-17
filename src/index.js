import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DogDetail from './components/DogDetail.js'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, withRouter, Switch} from 'react-router-dom';
import rootReducer from './reducers/dogReducer.js';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
