import { createStore, applyMiddleware  } from 'redux';
import rootReducer from '../reducers/';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
const composedEnhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));

export default function() {
  const store = createStore(
    rootReducer,
    composedEnhancers
  );

  return store
}