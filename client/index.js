import React from 'react';
import { render } from 'react-dom';
import { Router, match } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import storeCreator from './common/stores';
import { history } from './common/services';

/* eslint-disable no-undef*/
const store = storeCreator(window.REDUX_STATE);
/* eslint-enable no-undef*/
const reduxHistory = syncHistoryWithStore(history, store);

match({ history: reduxHistory, routes }, (error, redirectLocation, renderProps) => {
  render(
    <Provider store={store}>
      <Router {...renderProps} />
    </Provider>,
    /* eslint-disable no-undef*/
    document.getElementById('root')
    /* eslint-enable no-undef*/
  );
});
