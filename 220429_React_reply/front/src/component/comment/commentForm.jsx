import { useContext, useState, useRef } from 'react';
import { Store } from './store/context';
import { CREATE_COMMENT } from './store/reducer';

const CommentForm = () => {
  const [content, setContent] = useState('');
  const { state, dispatch } = useContext(Store);
  const inputText = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: CREATE_COMMENT,
      payload: {
        userid: 'web7722',
        content,
        date: '2022-04-29',
      },
    });
    setContent('');
    inputText.current.focus();
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setContent(value);
  };

  return (
    <li>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          ref={inputText}
          value={content}
        />
        <button type="submit">댓글</button>
      </form>
    </li>
  );
};

export default CommentForm;
