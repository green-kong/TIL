import React, { Component } from 'react';

import '../css/comment.css';

export default class Reply extends Component {
  render() {
    console.log(this.props.children);
    return <ul className="comment">{this.props.children}</ul>;
  }
}
