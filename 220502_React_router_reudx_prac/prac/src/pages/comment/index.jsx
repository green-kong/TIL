import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

const Comment = () => {
  const dispatch = useDispatch();

  const initialState = {
    userAlias: '',
    content: '',
  };

  const [commentState, setCommentState] = useState(initialState);

  const changeValue = (e) => {
    const {
      target: { name, value },
    } = e;

    setCommentState({
      ...commentState,
      [name]: value,
    });
  };

  const comment = useSelector((state) =>
    state.comment.commentList.map((v) => {
      return (
        <li>
          <ul>
            <li>작성자: {v.userAlias}</li>
            <li>내용: {v.content}</li>
            <li>날짜: {v.date}</li>
          </ul>
        </li>
      );
    })
  );

  const submitHandler = (e) => {
    e.preventDefault();

    if (commentState.userAlias && commentState.content) {
      dispatch({ type: 'ADD_COMMENT', payload: commentState });
    }
  };
  return (
    <>
      <h3>Comment Component</h3>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          name="userAlias"
          placeholder="작성자"
          onChange={changeValue}
        />
        <input
          type="text"
          name="content"
          placeholder="내용"
          onChange={changeValue}
        />
        <button type="submit">등록</button>
      </form>
      <ul>{comment}</ul>
    </>
  );
};

export default Comment;
