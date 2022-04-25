import React, { useState, useEffect } from 'react';

const Effect = () => {
  const [count, setCount] = useState(0);

  // useEffect(줄여서 걍 Effect라고 함) 는 아래 3가지를 다 포함함
  // componentDidMount
  // componentDidUpdate
  // componentwillUnMount

  // useEffect 사용법: 인자값 두개 받음
  // 1. 콜백
  // 2. deps(=array) option 임,
  //  - 빈배열을 넣으면 didMount 처럼 동작
  //  - props or state를 배열에 넣고 동작하면 didUpdate 처럼 동작함

  // 3. retrun 은 함수가 들어감 이때는 willUnmout와 같이 동작

  useEffect(() => {
    console.log('hello');
  }, []);

  return (
    <div>
      <h1>Effect</h1>
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

export default Effect;
