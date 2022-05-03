const redux = require('redux');
const { createStore } = redux;

const initialState = {
  user: {
    userid: 'web7722',
    username: 'ingoo',
  },
  comment: {
    list: [{ idx: 0, content: 'asdf', date: '2022-05-03' }],
  },
  category: {
    mainCd: [
      {
        idx: 0,
        name: 'board',
        subCate: [
          {
            idx: 0,
            name: 'notice',
          },
          {
            idx: 1,
            name: 'freeboard',
          },
        ],
      },
    ],
  },
};

class actionObj {
  constructor() {
    this.CHANGE_NAME = 'change_name';
    this.ADD_COMMNET = 'add_comment';
    this.ADD_SUBCATEGORY = 'add_subcategory';
  }

  change_name = (payload) => ({ type: this.CHANGE_NAME, payload });

  add_comment = (payload) => ({ type: this.ADD_COMMNET, payload });

  add_subcategory = (payload) => ({ type: this.ADD_SUBCATEGORY, payload });
}

const test = new actionObj();

const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case test.CHANGE_NAME:
      return {
        ...state,
        user: {
          ...state.user,
          userid: payload,
        },
      };

    case test.ADD_COMMNET:
      payload.idx = state.comment.list.length;
      state.comment.list.push(payload);
      return {
        ...state,
      };

    case test.ADD_SUBCATEGORY:
      let idx = undefined;
      state.category.mainCd.forEach((v, i) => {
        if (v.name === payload.main) {
          idx = i;
        }
      });
      if (idx === undefined) {
        return state;
      }

      const newSub = {
        idx: state.category.mainCd[idx].subCate.length,
        name: payload.subCate,
      };

      state.category.mainCd[idx].subCate.push(newSub);
      return {
        ...state,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

store.dispatch(test.change_name('dev_kong'));
store.dispatch(test.add_comment({ content: '안녕하세요', date: '2022-05-04' }));
store.dispatch(test.add_subcategory({ main: 'board', subCate: 'QnA' }));
console.log(store.getState().category.mainCd[0].subCate);
