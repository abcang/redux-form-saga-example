import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import createStore from './store';
import Form from './containers/Form';

const store = createStore();
render(
  <Provider store={store}>
    <Form />
  </Provider>,
  document.getElementById('app')
);
