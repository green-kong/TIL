import Responsive from '../../component/common/responsive';
import { useSelector, useDispatch } from 'react-redux';
import { up, down } from '../../reducer';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state);

  const onUp = () => {
    dispatch(up());
  };

  const onDown = () => {
    dispatch(down());
  };

  return (
    <>
      <Responsive>
        <h3>Counter : {counter.number}</h3>
        <button onClick={onUp}>+1</button>
        <button onClick={onDown}>-1</button>
      </Responsive>
    </>
  );
};

export default Counter;
