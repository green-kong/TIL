const initialState = {
  commentList: [
    {
      userAlias: 'kong',
      content: 'ㅎㅇㅎㅇ',
      date: '2022-05-01',
    },
    {
      userAlias: 'pea',
      content: 'ㅎㅇㅎㅇ2',
      date: '2022-05-03',
    },
  ],
};

const comment = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_COMMENT':
      const nowDate = new Date();
      const date = `${nowDate.getFullYear()}-${
        nowDate.getMonth() + 1
      }-${nowDate.getDate()}`;
      payload.date = date;
      const newCommnetList = [...state.commentList, payload];
      return {
        ...state,
        commentList: newCommnetList,
      };

    default:
      return state;
  }
};

export default comment;
