import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const clickDecrease = () => {
    dispatch({ type: 'decrease' });
  };

  const clickIncrease = () => {
    dispatch({ type: 'increase' });
  };

  return (
    <>
      <h3>Counter Component</h3>
      <button onClick={clickDecrease}>-1</button>
      <p>{state.number}</p>
      <button onClick={clickIncrease}>+1</button>
    </>
  );
};

export default Counter;
