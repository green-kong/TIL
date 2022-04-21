import React, { Component } from 'react';

class GuguList extends Component {
  state = { result: '' };

  makeGugu = (maximum) => {
    let tmp = [];
    for (let i = 1; i <= maximum; i++) {
      tmp.push(
        <li key={i}>
          {this.props.value}*{i}= {this.props.value * i}
        </li>
      );
    }
    return tmp;
  };

  render() {
    const {
      props: { value },
    } = this;
    return (
      <>
        <h2>{value ? `${value}단 입니다.` : `입력해주세요`}</h2>
        <ul>{this.makeGugu(20)}</ul>
      </>
    );
  }
}

export default GuguList;
