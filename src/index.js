import React from 'react';
import { render } from 'react-dom';
import { Provider }  from 'react-redux';
import Layout from './components/Layout';
import { getImages } from './actions/ImageActions'
import store from './store';
store.dispatch(getImages)
render(
  <Provider store={store}>
    <Layout/>
  </Provider>,
  document.getElementById('root')
);
