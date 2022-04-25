import './App.css';
import State from './Components/state/state.jsx';
import Effect from './Components/effect/effect.jsx';
import Login from './Components/login/login.jsx';
import Props from './Components/props/props.jsx';

const App = () => {
  return (
    <div className="App">
      <h1>Login</h1>
      <Login />
      <h1>State</h1>
      <State />
      <Effect />
      <h1>Props</h1>
      <Props value="hello" value2="world" />
    </div>
  );
};

export default App;
