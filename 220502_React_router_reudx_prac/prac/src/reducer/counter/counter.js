const initalState = {
  number: 0,
};

const counter = (state = initalState, action) => {
  const { type, payload } = action;
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

export default counter;
