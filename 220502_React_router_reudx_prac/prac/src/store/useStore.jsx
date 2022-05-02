import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducer';

const store = createStore(rootReducer, composeWithDevTools());

const Store = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Store;
