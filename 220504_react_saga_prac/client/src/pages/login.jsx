import useForm from '../hooks/useForm';
import loginActions from '../reducer/login/loginActions';

import { useDispatch } from 'react-redux';

const Login = () => {
  const initialState = {
    userId: '',
    userPw: '',
  };
  const [inputState, setInput] = useForm(initialState);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    const payload = inputState;

    dispatch({
      ...loginActions.loginPending(),
      payload,
    });
  };

  return (
    <form action="http://localhost:4000/api/login" onSubmit={submitHandler}>
      <ul>
        <li>
          <input
            type="text"
            name="userId"
            value={inputState.userId}
            onChange={setInput}
          />
        </li>
        <li>
          <input
            type="text"
            name="userPw"
            value={inputState.userPw}
            onChange={setInput}
          />
        </li>
        <li>
          <button type="submit">로그인</button>
        </li>
      </ul>
    </form>
  );
};

export default Login;
