import { useSelector } from 'react-redux';

import Login from './login';
import Welcome from './welcome';

const Home = () => {
  const isLogin = useSelector((state) => state.login.isLogin);

  return <div>{isLogin ? <Welcome /> : <Login />}</div>;
};

export default Home;
