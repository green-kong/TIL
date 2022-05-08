import Responsive from '../Components/common/Responsive';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { up, down } from '../reducers/counter.js';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const onUp = useCallback(() => {
    dispatch(up());
  }, [dispatch]);
  const onDown = useCallback(() => {
    dispatch(down());
  }, [dispatch]);

  return (
    <Responsive>
      <h1> Counter : {counter.number}</h1>
      {counter.loading ? (
        '로딩중입니다'
      ) : (
        <>
          <button onClick={onUp}>+1</button>
          <button onClick={onDown}>-1</button>
        </>
      )}
      <p>{counter.error}</p>
    </Responsive>
  );
};

export default Counter;
