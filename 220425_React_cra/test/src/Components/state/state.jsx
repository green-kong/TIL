import React, { useState } from 'react';

const State = () => {
  // Hooks 사용 공간 여기말곤 안됨
  const [value, setValue] = useState('ingoo');
  // useState 의 return 은 array -> [초기값 ,함수]
  // useState 의 인자값이 초기값으로 들어감

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default State;
