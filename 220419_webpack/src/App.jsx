// const React = require('react');
// const { Component } = React;

import React, { Component } from 'react';
import './css/a.css';
import './css/b.css';
import styles from './css/App.module.css';
import styled from 'styled-components';
import Gugu from './components/gugu';

const Button = styled.button`
  background: #000;
  border: none;
  color: #fff;
  padding: 7px 14px;
`;

const HoverButton = styled(Button)`
  background-color: #007bff;
  :hover {
    background: #0069d9;
  }
`;

const ActiveButton = styled(Button)`
  background: ${({ background }) => background};
`;

class App extends Component {
  state = {
    value: 'hello asdf',
  };
  render() {
    return (
      // <>
      //   <div className={styles.color}>{this.state.value}</div>
      //   <Button>하잉</Button>
      //   <HoverButton>체크</HoverButton>
      //   <ActiveButton background="tomato">체크2</ActiveButton>
      // </>
      <Gugu />
    );
  }
}

export default App;
