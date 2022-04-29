import { Store } from './store/context';
import { useContext, useState } from 'react';
import { UPDATE_COMMENT } from './store/reducer';

const CommentList = () => {
  const [changingIdx, setChangingIdx] = useState(null);
  const {
    state: { commentItem },
    dispatch,
  } = useContext(Store);

  const handleClick = (k) => {
    setChangingIdx(k);
  };

  const keydownHandler = (i) => (e) => {
    const {
      key,
      target: { value },
    } = e;

    if (key === 'Enter') {
      const newCommentList = [...commentItem];
      newCommentList[i].content = value;
      dispatch({ type: UPDATE_COMMENT, payload: newCommentList });
      setChangingIdx(null);
    }
  };

  const getCommentList = () => {
    return commentItem.map((v, i) => {
      return (
        <ul key={i}>
          <li>{v.userid}</li>
          {changingIdx === i ? (
            <input
              type="text"
              defaultValue={v.content}
              onKeyDown={keydownHandler(i)}
            />
          ) : (
            <li
              onClick={() => {
                handleClick(i);
              }}
            >
              {v.content}
            </li>
          )}
          <li>{v.date}</li>
        </ul>
      );
    });
  };

  return <li>{getCommentList()}</li>;
};

export default CommentList;
