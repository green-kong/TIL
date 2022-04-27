import { useState, useEffect } from 'react';

import Square from '../Components/square.jsx';

import '../css/game.css';
const Game = () => {
  const [tried, setTried] = useState(0);
  const [history, setHistory] = useState([]);
  const [answer, setAnswer] = useState('');
  const [correct, setCorrect] = useState(false);

  useEffect(() => {
    const arr = [
      'apple',
      'house',
      'naver',
      'sleep',
      'grape',
      'trade',
      'grade',
      'score',
      'board',
      'often',
    ];

    const randomNum = Math.floor(Math.random() * 10);

    setAnswer(arr[randomNum]);
  }, []);

  const onSubmit = (val) => {
    if (val === answer) {
      setCorrect(true);
      return;
    }
    setTried(tried + 1);

    const log = [];
    const valueArr = val.split('');
    const answerArr = answer.split('');

    for (let i = 0; i < 5; i++) {
      if (valueArr[i] === answerArr[i]) {
        log[i] = 'strike';
        answerArr[i] = false;
      }
    }

    for (let i = 0; i < 5; i++) {
      if (!answerArr[i]) {
        continue;
      }

      if (answerArr.includes(valueArr[i])) {
        log[i] = 'ball';
        continue;
      }

      log[i] = 'out';
    }

    const newHistory = [...history];

    newHistory.push(log);
    setHistory(newHistory);
  };

  const renderSquare = () => {
    const squareArr = [];

    for (let i = 0; i < tried + 1; i++) {
      const check = tried > i ? true : false;
      squareArr.push(
        <Square
          onSubmit={onSubmit}
          correct={correct}
          check={check}
          history={history[i]}
        />
      );
    }
    return squareArr;
  };

  const restartClick = () => {
    setTried(0);
    const arr = [
      'apple',
      'house',
      'naver',
      'sleep',
      'grape',
      'trade',
      'grade',
      'score',
      'board',
      'often',
    ];

    const randomNum = Math.floor(Math.random() * 10);

    setAnswer(arr[randomNum]);
    setCorrect(false);
    setHistory([]);
  };

  return (
    <div className="game">
      <p>{correct ? `${tried + 1}번 만에 정답!` : `${tried}번 째 시도중`}</p>
      <button onClick={restartClick} className="restart_btn">
        Restart
      </button>
      {renderSquare()}
    </div>
  );
};

export default Game;
