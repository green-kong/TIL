import { useState, useCallback } from 'react';

const useForm = (initalState = null) => {
  const [inputState, setInput] = useState(initalState);

  const handler = useCallback(
    (e) => {
      const {
        target: { name, value },
      } = e;

      setInput({
        ...inputState,
        [name]: value,
      });
    },
    [inputState]
  );

  return [inputState, handler];
};

export default useForm;
