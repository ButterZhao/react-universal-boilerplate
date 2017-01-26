import React from 'react';
import { render } from 'react-dom';
import { Router, match } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import storeCreator from './common/stores';
import { history } from './common/services';

const store = storeCreator(window.REDUX_STATE);
const reduxHistory = syncHistoryWithStore(history, store);

match({history: reduxHistory, routes}, (error, redirectLocation, renderProps) => {
    render(
        <Provider store={store}>
            <Router {...renderProps}/>
        </Provider>,
        document.getElementById('root')
    )
});
