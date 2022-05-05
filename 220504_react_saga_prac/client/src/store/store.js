import { createStore } from 'redux';
import { rootSaga, enhancer, sagaMiddleware } from '../redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducer/index';

const store = createStore(rootReducer, enhancer);

const Store = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
sagaMiddleware.run(rootSaga);

export default Store;
