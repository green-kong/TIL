const React = require('react');
// const { Component } = React;

// import React, { Component } from 'react';

class App extends React.Component {
  state = {
    value: 'hello kong',
  };
  render() {
    return <>{this.state.value}</>;
  }
}

module.exports = App;
