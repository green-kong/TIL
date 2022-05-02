const initialState = {
  number: 0,
};

const rootReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case 'increase':
      return {
        ...state,
        number: state.number + 1,
      };

    case 'decrease':
      return {
        ...state,
        number: state.number - 1,
      };

    default:
      return state;
  }
};

export default rootReducer;
