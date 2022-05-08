import loginActions from './loginActions';

const intialState = {
  isLogin: false,
  user: null,
};

const login = (state = intialState, action) => {
  switch (action.type) {
    case loginActions.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLogin: true,
      };
    default:
      return state;
  }
};

export default login;
