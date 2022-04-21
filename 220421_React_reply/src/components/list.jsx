import React, { Component } from 'react';

export default class List extends Component {
  items = () => {
    const { list, clickDel } = this.props;
    return list.map((v, i) => {
      console.log(i);
      return (
        <ul className="comment-row">
          <li className="comment-id">{v.userid}</li>
          <li className="comment-content">{v.content}</li>
          <li
            className="comment-delete-btn"
            onClick={() => {
              clickDel(i);
            }}
          >
            X
          </li>
          <li className="comment-date">{v.date}</li>
        </ul>
      );
    });
  };

  render() {
    return <li>{this.items()}</li>;
  }
}
