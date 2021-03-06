import './App.css';
import State from './Components/State/State.jsx';
import Effect from './Components/Effect/Effect.jsx';
import Login from './Components/Login/Login.jsx';
import Props from './Components/props/Props.jsx';
import Logins from './Components/Logins/Logins.jsx';
import Login_hook from './Components/Logins/Login_hook';
import Form from './Components/Form/Form.jsx';
import Callback from './Components/callback/callback.jsx';
import Context from './Components/propsContext/context';
import Reduce from './Components/reducer/reducer.jsx';

const App = () => {
  return (
    <div>
      <h1>Form Component</h1>
      <Reduce />
    </div>
  );
};

export default App;
