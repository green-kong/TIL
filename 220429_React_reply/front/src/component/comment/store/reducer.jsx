export const GET_COMMENT = 'GET_COMMENT';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_COMMENT:
      return {
        ...state,
      };

    case CREATE_COMMENT:
      return {
        ...state,
        commentItem: [...state.commentItem, payload],
      };

    case UPDATE_COMMENT:
      return {
        ...state,
        commentItem: payload,
      };

    default:
      return state;
  }
};

export default reducer;
