import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';

import useForm from '../hooks/useForm';
import commentActions from '../reducer/comment/commentActions';

const Comment = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentActions.getComment());
  }, [dispatch]);

  const user = useSelector((state) => state.login.user);
  const comment = useSelector((state) => state.comment);

  const commentList = () => {
    if (comment.list) {
      return comment.list.map((v, i) => {
        return (
          <li key={i}>
            <ul>
              <li>{v.content}</li>
              <li>{v.author}</li>
              <li>{v.date}</li>
            </ul>
          </li>
        );
      });
    } else {
      return <li> 댓글이 없습니다.</li>;
    }
  };
  const initialState = {
    content: '',
    author: user.u_id,
  };

  const [inputState, setState] = useForm(initialState);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(commentActions.addPending(inputState));
  };

  return (
    <>
      <p>Comment page</p>
      <form action="" onSubmit={submitHandler}>
        <ul>
          <li>
            <input
              type="text"
              name="content"
              onChange={setState}
              value={inputState.content || ''}
            />
          </li>
          <li>
            <input type="text" value={user.userAlias} disabled />
          </li>
          <input type="hidden" value={user.u_id} />
          <li>
            {comment.pending ? (
              '댓글 등록 중'
            ) : (
              <button type="submit">댓글 등록</button>
            )}
          </li>
        </ul>
      </form>
      <ul>{commentList()}</ul>
    </>
  );
};

export default Comment;
