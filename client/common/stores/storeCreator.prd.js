import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware} from 'react-router-redux';

import { history } from '../services';
import reducers from '../reducers';
import rootSaga from '../sagas';

export default (state) => {
  const _routerMiddleware = routerMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducers,
    state,
    applyMiddleware(sagaMiddleware, _routerMiddleware)
  );
  sagaMiddleware.run(rootSaga);

  return store;
}
