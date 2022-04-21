import React, { Component } from 'react';
import GuguForm from './guguform';
import GuguList from './guguList';

class Gugu extends Component {
  state = {
    value: '',
  };

  clickButton = (v) => {
    this.setState({
      ...this.state,
      value: v,
    });
  };

  render() {
    return (
      <>
        <GuguForm
          onClick={(v) => {
            this.clickButton(v);
          }}
        />
        <GuguList value={this.state.value} />
      </>
    );
  }
}

export default Gugu;
