import commentActions from './commentActions';

const initialState = {
  list: null,
  pending: false,
};

const comment = (state = initialState, action) => {
  switch (action.type) {
    case commentActions.GET_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };

    case commentActions.ADD_PENDING:
      return {
        ...state,
        pending: true,
      };

    case commentActions.ADD_SUCCESS:
      return {
        ...state,
        pending: false,
      };

    case commentActions.ADD_FAILURE:
      return {
        ...state,
        pending: false,
      };

    default:
      return state;
  }
};

export default comment;
