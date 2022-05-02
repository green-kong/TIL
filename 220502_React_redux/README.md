# React router documentation

### 세팅

```zsh
npm install react-router-dom

```

current version : V6 - 2021-12-17

최상위(App component)에 올려놓고 시작해야함.

```js
//App.js

import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
```

- Router(BrowserRouter) : 최상위 컴포넌트
- Link : A 태그 대신 써야할 컴포넌트
- Routes : 컴포넌트를 보여주게할 영역을 감싸는 컴포넌트
- Route : URI에 맞는 컴포넌트를 찾아주는 컴포넌트

### Directory 구성

```
src
|- component : 공통적으로 들어갈 컴포넌트 모음
  |- common
    |- header.jsx
    |- responsive.jsx
|- hook : 훅에 관련된 내용을 넣는 컴포넌트
|- pages : 사용자에게 보여줄 컴포넌트 모음
|- reducer : reducer 모음
|- Store : 전역상태를 만들어주는 디렉토리
|- comment
  |- index.js
  |- ...
  |- ...
  |- ...
  |- css
```

### CSS(styled-components)

```js
import styled from 'styled-components';
```

### Redux

> Context 와 비슷함

```js
// exmaple state

state = {
  comment: {
    list: [],
  },

  counter: {
    number: 0,
  },

  user: {
    // ...
  },
};
```

위의 상태를 변경하기가 매우 곤란함
`state.comment.list[i]=???`

그래서 redux 사용함

#### setting

```zsh
npm i redux react-redux
npm i redux-devtools-extension
```
