import React, { Component } from 'react';

export default class Input extends Component {
  state = { value: '' };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      ...this.state,
      value,
    });
  };

  submitControll = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({
      ...this.state,
      value: '',
    });
  };

  render() {
    return (
      <li>
        <form action="" onSubmit={this.submitControll}>
          <span>
            <input
              type="text"
              className="int"
              placeholder="댓글을 입력해주세요"
              onChange={this.handleChange}
              value={this.state.value}
            />
          </span>
          <button type="submit" className="btn">
            댓글
          </button>
        </form>
      </li>
    );
  }
}
