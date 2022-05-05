import loginActions from './loginActions';

const intialState = {
  isLogin: false,
};

const login = (state = intialState, action) => {
  switch (action.type) {
    case loginActions.LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
      };
    default:
      return state;
  }
};

export default login;
