# create-react-app

### 1. 설치

- 명령어 : npx create-react-app [디렉토리명]

  > CRA 안에 기본 적인 설정들은 다 되어있음(webpac,babel,react,react-dom....)

- 실행 : 디렉토리 이동 후 `npm run strat` 또는 `npm start`

# Function Component

### 1. hook

```js
// class Component

class App extends React.Component {
  // ...
}

// fucntion Component

function App() {
  // ...
}

// or

const App = () => {
  // ...
};
```

- 기존의 함수형 컴포넌트는 상태를 만들 수 없었고, 생명주기를 사용할 수 없었다.
  - 위의 두개를 사용할 수 있게끔, 함수들을 모아 놓은 것을 `Hooks`라고 한다

### 2. 함수형 컴포넌트의 장점

1. 가독성 좋아짐

> class를 잘 모른다면..? 그럴거 같기도?

2. this 몰라도 됨

   > ..? js 공부 안함..?

3. 코드 재사용성 높아짐
   > class도 재사용성은 높은거 아닌가..?
