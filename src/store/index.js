import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import sagas from '../sagas';

export default (props = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const reducer = combineReducers(reducers);
  const composedStore = compose(
    applyMiddleware(sagaMiddleware)
  );
  const storeCreator = composedStore(createStore);
  const store = storeCreator(reducer, props);

  sagaMiddleware.run(sagas);
  return store;
};
