import React, { Component } from 'react';

export default class List extends Component {
  state = { udtValue: '' };

  input = React.createRef();

  componentDidUpdate() {
    if (this.input.current) {
      this.input.current.focus();
    }
  }

  udtChange = (e) => {
    this.setState({
      ...this.state,
      udtValue: e.target.value,
    });
  };

  udtClickHandle = (i) => {
    const { list } = this.props;
    this.setState({
      ...this.state,
      udtValue: list[i].content,
    });
    this.props.clickUdt(i);
  };

  items = () => {
    const { list, clickDel, updatingIdx, udtSubmit } = this.props;
    return list.map((v, i) => {
      return (
        <ul className="comment-row">
          <li className="comment-id">{v.userid}</li>
          {updatingIdx === i ? (
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                udtSubmit(i, this.state.udtValue);
              }}
            >
              <input
                type="text"
                value={this.state.udtValue}
                onChange={this.udtChange}
                className="comment-update-input"
                ref={this.input}
              />
              <button type="submit">수정</button>
            </form>
          ) : (
            <>
              <li
                className="comment-content"
                onClick={(e) => {
                  this.udtClickHandle(i);
                }}
              >
                {v.content}
              </li>
              <li
                className="comment-delete-btn"
                onClick={() => {
                  clickDel(i);
                }}
              >
                X
              </li>
            </>
          )}
          <li className="comment-date">{v.date}</li>
        </ul>
      );
    });
  };

  render() {
    return <li>{this.items()}</li>;
  }
}
