import { useCallback, useState } from 'react';

const Callback = () => {
  const [hi, setHi] = useState(0);
  const [bye, setBye] = useState(0);

  const hiClick = useCallback(() => {
    console.log(bye);
    setHi(hi + 1);
  }, [bye]);

  const byeClick = useCallback(() => {
    console.log('world');
    setBye(bye + 1);
  }, [bye]);

  // const hiClick = () => {
  //   console.log('hi2');
  //   setHi(hi + 1);
  // };

  return (
    <>
      <p>{hi}</p>
      <p>{bye}</p>
      <button onClick={hiClick}>hi</button>
      <button onClick={byeClick}>bye</button>
    </>
  );
};

export default Callback;
