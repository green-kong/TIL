import { useState, useEffect } from 'react';
import validate from '../Hook/validate';

const useForm = (defaultValue, onSubmit) => {
  const [values, setValues] = useState(defaultValue);
  const [submit, setSubmit] = useState(false);
  const [errors, setError] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    setError(validate(values));
  };

  useEffect(() => {
    if (submit) {
      if (Object.keys(errors).length === 0) {
        onSubmit(values);
      }
      setSubmit(false);
    }
  }, [errors]);

  const input = {};
  const arr = Object.entries(values);
  arr.forEach(([key, value]) => {
    input[key] = {
      value,
      onChange,
    };
  });

  return {
    input,
    onChange,
    submit,
    handleSubmit,
    errors,
  };
};

export default useForm;
