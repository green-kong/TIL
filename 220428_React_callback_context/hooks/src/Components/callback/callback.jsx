import { useCallback } from 'react';

const Callback = () => {
  const [hi, setHi] = useState(0);
  const [bye, setBye] = useState(0);

  const hiClick = useCallback(() => {
    console.log('hello');
    setHi(hi + 1);
  }, [hi]);

  const byeClick = useCallbakc(() => {
    console.log('world');
    setBye(bye + 1);
  }, [bye]);

  return (
    <>
      <p>{hi}</p>
      <p>{bye}</p>
    </>
  );
};
