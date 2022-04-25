import React, { Component } from 'react';

import Square from './square';

export default class Game extends Component {
  inputText = React.createRef();
  renderSquare = () => {
    const squareArr = [];
    for (let i = 0; i < this.props.try + 1; i++) {
      const tried = i < this.props.try ? true : false;
      squareArr.push(
        <div>
          <Square
            onSubmit={this.props.onSubmit}
            tried={tried}
            history={this.props.history[i]}
            correct={this.props.correct}
          />
        </div>
      );
    }
    return squareArr;
  };

  render() {
    return <>{this.renderSquare()}</>;
  }
}
