import React, { Component } from 'react';

import Game from './components/game.jsx';

export default class App extends Component {
  state = {
    try: 0,
    answerArr: [
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
    ],
    correct: false,
    history: [],
    answer: '',
  };

  componentDidMount() {
    const randomNum = Math.floor(Math.random() * 10);

    this.setState({
      ...this.state,
      answer: this.state.answerArr[randomNum],
    });
  }

  onSubmit = (value) => {
    if (this.state.answer === value) {
      this.setState({
        ...this.state,
        correct: true,
      });
      return;
    }

    const valArr = value.split('');
    const answerArr = this.state.answer.split('');
    const historyArr = [];

    for (let i = 0; i < valArr.length; i++) {
      if (valArr[i] === answerArr[i]) {
        answerArr[i] = false;
        historyArr[i] = 'strike';
      }
    }
    for (let i = 0; i < valArr.length; i++) {
      if (!answerArr[i]) {
        continue;
      }
      if (answerArr.includes(valArr[i])) {
        historyArr[i] = 'ball';
        continue;
      }

      historyArr[i] = 'out';
    }

    const newHistory = [...this.state.history];
    newHistory.push(historyArr);

    this.setState({
      ...this.state,
      try: this.state.try + 1,
      history: newHistory,
    });
  };

  reload = () => {
    location.href = 'http://localhost:3030';
  };

  render() {
    return (
      <div>
        <span>
          {' '}
          {this.state.correct ? `정답입니다` : `try:${this.state.try}`}
        </span>
        <button onClick={this.reload}>다시하기</button>
        <Game
          try={this.state.try}
          onSubmit={this.onSubmit}
          history={this.state.history}
          correct={this.state.correct}
        />
      </div>
    );
  }
}
