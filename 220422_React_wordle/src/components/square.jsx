import React, { Component, createRef, useRef } from 'react';

import '../css/Square.css';

export default class Square extends Component {
  state = {
    value: Array(5).fill(''),
  };

  secondInput = React.createRef();
  thirdInput = React.createRef();
  forthInput = React.createRef();
  fifthInput = React.createRef();

  inputArr = [
    this.secondInput,
    this.thirdInput,
    this.forthInput,
    this.fifthInput,
  ];

  changeValue = (i) => (e) => {
    const newValue = [...this.state.value];
    newValue[i] = e.target.value;

    this.setState({
      ...this.state,
      value: newValue,
    });

    if (i === 4 || e.target.value === '') {
      return;
    }
    this.inputArr[i].current.focus();
  };

  onSubmit = (e) => {
    e.preventDefault();

    const value = this.state.value.join('');
    this.props.onSubmit(value);
  };

  renderSpan = () => {
    const spanArr = [];
    for (let i = 0; i < 5; i++) {
      const result = this.props.history[i];
      let className = 'square out';
      if (result === 'strike') {
        className = 'square strike';
      }

      if (result === 'ball') {
        className = 'square ball';
      }

      spanArr.push(<span className={className}>{this.state.value[i]}</span>);
    }
    return spanArr;
  };

  render() {
    return this.props.tried ? (
      <div className="square_row">{this.renderSpan()}</div>
    ) : (
      <form action="" className="square_row" onSubmit={this.onSubmit}>
        <input
          type="text"
          className={this.props.correct ? 'square strike' : 'square'}
          onChange={this.changeValue(0)}
          value={this.state.value[0]}
          maxLength="1"
        />
        <input
          type="text"
          className={this.props.correct ? 'square strike' : 'square'}
          onChange={this.changeValue(1)}
          value={this.state.value[1]}
          maxLength="1"
          ref={this.secondInput}
        />
        <input
          type="text"
          className={this.props.correct ? 'square strike' : 'square'}
          onChange={this.changeValue(2)}
          value={this.state.value[2]}
          maxLength="1"
          ref={this.thirdInput}
        />
        <input
          type="text"
          className={this.props.correct ? 'square strike' : 'square'}
          onChange={this.changeValue(3)}
          value={this.state.value[3]}
          maxLength="1"
          ref={this.forthInput}
        />
        <input
          type="text"
          className={this.props.correct ? 'square strike' : 'square'}
          onChange={this.changeValue(4)}
          value={this.state.value[4]}
          maxLength="1"
          ref={this.fifthInput}
        />
        <button type="submit" className="submitBtn">
          제출
        </button>
      </form>
    );
  }
}

// const newValue = [...this.state.value];
// newValue[i] = '';
// newValue[i] = e.target.value;
// this.setState({
//   ...this.state,
//   value: newValue,
// });
