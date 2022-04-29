import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case '유저아이디':
      return {
        ...state,
        user: {
          ...state.user,
          userid: 'asdf',
        },
      };

    case '유저네임':
      return {
        ...state,
        user: {
          ...state.user,
          username: 'kong',
        },
      };
    default:
      break;
  }

  return state;
};

const initialState = {
  user: {
    userid: '',
    username: '',
    userlever: '',
  },
  notice: [{ idx: 0, subject: 'asdf', date: '2022-04-28' }],
};

const Reduce = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = () => {
    dispatch({ type: '유저아이디' });
  };

  const handleClick2 = () => {
    dispatch({ type: '유저네임' });
  };

  return (
    <>
      <p>{state.user.userid}</p>
      <p>{state.user.username}</p>
      <button onClick={handleClick}>아이디 클릭</button>
      <button onClick={handleClick2}>이름 클릭</button>
    </>
  );
};

export default Reduce;
