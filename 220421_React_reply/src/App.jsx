import React, { Component } from 'react';
import Reply from './components/reply.jsx';
import Input from './components/input';
import List from './components/list';

class App extends Component {
  state = {
    list: [
      {
        userid: 'web7722',
        content: '안녕하세요',
        date: '2022-04-21',
      },
    ],
    isUpdating: -1,
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      list: [],
    });
  }

  handleSubmit = (value) => {
    const newList = [...this.state.list];

    const dateNow = new Date();

    const date = `${dateNow.getFullYear()}-${
      dateNow.getMonth() + 1
    }-${dateNow.getDate()}`;

    newList.push({
      userid: 'kong',
      content: value,
      date,
    });

    this.setState({
      ...this.state,
      list: newList,
    });
  };

  clickDelBtn = (delIdx) => {
    const { list } = this.state;

    const newList = list.filter((_, i) => i !== delIdx);
    this.setState({
      ...this.state,
      list: newList,
    });
  };

  clikcUdt = (udtIdx) => {
    this.setState({
      ...this.state,
      isUpdating: udtIdx,
    });
  };

  udtSubmit = (idx, value) => {
    const newList = [...this.state.list];

    newList[idx].content = value;
    this.setState({ ...this.state, list: newList, isUpdating: -1 });
  };

  render() {
    return (
      <>
        <Reply>
          <Input onSubmit={this.handleSubmit}></Input>
          <List
            list={this.state.list}
            clickDel={this.clickDelBtn}
            clickUdt={this.clikcUdt}
            updatingIdx={this.state.isUpdating}
            udtSubmit={this.udtSubmit}
          ></List>
        </Reply>
      </>
    );
  }
}

export default App;
