const initialState = {
  commentList: [],
};

const comment = (state = initialState, action) => {
  switch (action.type) {
    case 'check':
      break;

    default:
      return state;
  }
};

module.exports = { comment };
