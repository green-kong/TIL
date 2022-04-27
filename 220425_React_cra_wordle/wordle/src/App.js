import { useState } from 'react';

import Rules from './Components/Rules.jsx';
import Game from './Components/Game.jsx';

import './App.css';

const App = () => {
  const [start, setStart] = useState(false);

  const startClick = () => {
    setStart(true);
  };

  return (
    <div className="App">
      {start ? <Game /> : <Rules startClick={startClick} />}
    </div>
  );
};

export default App;
