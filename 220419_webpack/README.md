- webpack 과 babel 연결해주는 라이브러리

```zsh
npm install -D babel-loader
```

- 엣날 브라우저에서도 구동할 수 있게 코드를 바꿔주는 바벨(폴리필)

```zsh
npm install -D @babel/preset-env
```

- JSX를 사용할 수 있게끔 해주는 babel 플러그인 라이브러리

```zsh
npm install -D @babel/preset-react
```

# Dev Server

> 개발할때만 사용

`npm install -D webpack-dev-server`

1. 웹서버를 구축을 해준다.

- src 폴더안에서 코드가 수정됨을 감지함.
- 서버를 재시작해주고,
- bundle 파일을 재구성 해준다

  `npm install -D @pmmmwh/react-refresh-webpack-plugin`
