class CommentActions {
  constructor() {
    this.ADD_PENDING = 'COMMENT/ADD_PENDING';
    this.ADD_SUCCESS = 'COMMENT/ADD_SUCCESS';
    this.ADD_FAILURE = 'COMMENT/ADD_FAILURE';
    this.GET_COMMENT = 'COMMENT/GET';
    this.GET_SUCCESS = 'COMMENT/GET_SUCCESS';
  }
  getComment = () => {
    return {
      type: this.GET_COMMENT,
    };
  };

  getSuccess = (payload) => {
    return {
      type: this.GET_SUCCESS,
      payload,
    };
  };

  addPending = (payload) => {
    return {
      type: this.ADD_PENDING,
      payload,
    };
  };

  addSuccess = (payload) => {
    return {
      type: this.ADD_SUCCESS,
      payload,
    };
  };

  addFailure = (payload) => {
    return {
      type: this.ADD_FAILURE,
      payload,
    };
  };
}

const commentActions = new CommentActions();

export default commentActions;
