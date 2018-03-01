import React from 'react';
import ReactDom from 'react-dom';
import PhoneCallApp from './components/PhoneCallApp';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';

/** TODO: write real reducer **/
const mainReducer = (state = 5) => state;
const store = createStore(mainReducer);
ReactDom.render(
  <Provider store={store}>
    <PhoneCallApp />
  </Provider>,
  document.getElementById('root'));
