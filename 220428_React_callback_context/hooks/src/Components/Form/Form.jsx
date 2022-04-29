import React, { useState, useEffect } from 'react';
import useForm from './useForm.jsx';

const onSubmit = async (items) => {
  const reuslt = await new Promise((res, rej) => {
    setTimeout(() => {
      res(items);
    }, 1000);
  });

  alert(JSON.stringify(reuslt));
};

const Form = () => {
  const { input, submit, handleSubmit, errors } = useForm(
    {
      userid: '',
      userpw: '',
    },
    onSubmit
  );

  return (
    <form onSubmit={handleSubmit}>
      <h2>회원가입</h2>
      <ul>
        <li>
          <label htmlFor="userid">아이디</label>
          <input type="text" name="userid" {...input.userid} />
          {errors.userid && <span>{errors.userid}</span>}
        </li>
        <li>
          <label htmlFor="password">패스워드</label>
          <input type="password" name="userpw" {...input.userpw} />
          {errors.userpw && <span>{errors.userpw}</span>}
        </li>
        <li>
          <input type="submit" value="가입" disabled={submit} />
        </li>
      </ul>
    </form>
  );
};

export default Form;
