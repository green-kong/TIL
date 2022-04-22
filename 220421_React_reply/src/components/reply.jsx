import React, { Component } from 'react';

import '../css/comment.css';

export default class Reply extends Component {
  render() {
    return <ul className="comment">{this.props.children}</ul>;
  }
}
