import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

const Store = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Store;
