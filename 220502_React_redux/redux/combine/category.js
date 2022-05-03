const initialState = {
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
};

const ADD = 'CATEGORY/ADD';

const category = (state = initialState, action) => {
  return state;
};

module.exports = category;
