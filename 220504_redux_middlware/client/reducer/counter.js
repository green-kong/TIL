const initialState = {
  num: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'check':
      break;

    default:
      return state;
  }
};

module.exports = { counter };
