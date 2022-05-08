import { useSelector } from 'react-redux';

const Welcome = () => {
  const user = useSelector((state) => state.login.user);

  return <>{user.userAlias}님 환영합니다^^</>;
};

export default Welcome;
