import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Router from './router'
import configureStore from './store/configureStore'
import App from './containers/App.js';
import '../style/less/index.less';

const store = configureStore()

render(
  <Provider store={store}>
  	{ Router(store) }
  </Provider>,
  document.getElementById('root')
)
