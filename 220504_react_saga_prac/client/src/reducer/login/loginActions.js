class LoginActions {
  constructor() {
    this.LOGIN_PENDING = 'LOGIN/PENDING';
    this.LOGIN_SUCCESS = 'LOGIN/SUCCESS';
    this.LOGIN_FAIL = 'LOGIN/FAIL';
  }

  loginPending() {
    return { type: this.LOGIN_PENDING };
  }

  loginSuccess(payload) {
    return { type: this.LOGIN_SUCCESS, payload };
  }

  loginFail() {
    return { type: this.LOGIN_FAIL };
  }
}

const loginActions = new LoginActions();

export default loginActions;
