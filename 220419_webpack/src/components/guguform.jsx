import React, { Component } from 'react';

class GuguForm extends Component {
  state = {
    value: '',
  };

  valueChange = (e) => {
    const {
      target: { value },
    } = e;
    this.setState({
      ...this.state,
      value,
    });
  };

  render() {
    const {
      props: { onClick },
      state: { value },
    } = this;
    return (
      <>
        <h2>몇단?</h2>
        <input type="text" onChange={this.valueChange} />
        <button
          onClick={() => {
            onClick(value);
          }}
        >
          {' '}
          확인{' '}
        </button>
      </>
    );
  }
}

export default GuguForm;
