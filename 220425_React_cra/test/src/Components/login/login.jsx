import React, { useState } from 'react';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [submit, setsubmit] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    console.log(values);
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    setsubmit(true);

    setTimeout(() => {
      setsubmit(false);
      const result = true;
      if (result) {
        alert('로그인 성공');
      } else {
        alert('로그인실패');
      }
      setIsLogin(true);
    }, 1000);
  };

  const logoutClick = () => {
    setIsLogin(false);
  };

  return (
    <form action="" onSubmit={loginSubmit}>
      <ul>
        <li>
          <label htmlFor="">이메일</label>
          <input type="text" name="email" onChange={handleChange} />
        </li>
        <li>
          <label htmlFor="">비번</label>
          <input type="password" name="password" onChange={handleChange} />
        </li>
        <li>
          <button type="submit" disabled={submit}>
            로그인
          </button>
        </li>
        {isLogin ? (
          <button onClick={logoutClick}>로그아웃</button>
        ) : (
          '로그인 안되어있음'
        )}
      </ul>
    </form>
  );
};

export default Login;
