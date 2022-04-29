import { Store, initialState } from './store/context';
import { useReducer, useMemo } from 'react';
import reducer from './store/reducer';

import CommentLayout from './layout';

const Comment = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const defaultValue = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state]
  );

  return (
    <Store.Provider value={defaultValue}>
      <CommentLayout />
    </Store.Provider>
  );
};

export default Comment;
