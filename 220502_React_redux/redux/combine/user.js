const initialState = {
  userid: 'web7722',
  username: 'ingoo',
};

const CHANGE = 'USER/CHANGE';
const USER_CHANGE = (payload) => ({ type: CHANGE, payload });

const user = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        userid: action.payload,
      };

    default:
      return state;
  }
};

module.exports = { user, USER_CHANGE };
