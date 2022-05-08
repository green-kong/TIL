import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleWare from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleWare();
const middlewares = [sagaMiddleware];

const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

const Store = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Store;
