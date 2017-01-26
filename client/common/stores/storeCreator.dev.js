import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware} from 'react-router-redux';

import { history } from '../services';
import reducers from '../reducers';
import rootSaga from '../sagas';
import DevTools from '../containers/DevTools'

export default (state) => {
  const composeEnhancers = (typeof window==='object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  const _routerMiddleware = routerMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducers,
    state,
    composeEnhancers(
      applyMiddleware(sagaMiddleware, _routerMiddleware)
    )
  );

  /**********************************************************************************************************/
  /***if you haven't install redux plugin in chrome, you could uncommit above line to active the dev tool****/
  /***            and commit the lines above which starts with   const store = createStore(               ***/
  /***            you also need to uncommit the lines under commponentDidMount in Root.dev.js             ***/
  /**********************************************************************************************************/
  // const store = createStore(
  //   reducers,
  //   state,
  //   compose(
  //     DevTools.instrument()
  //   )
  // );
  /**********************************************************************************************************/

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducers = require('../reducers');
      const nextReducer = combineReducers(nextReducers);
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
