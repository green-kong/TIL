const express = require(`express`);
const nunjucks = require(`nunjucks`);
const router = require(`./routes`);
const webSocket = require(`./socket.js`);
const cookieParser = require(`cookie-parser`);

const app = express();

app.set(`view engine`, `html`);
nunjucks.configure(`views`, { express: app, watch: true });

app.use(express.static(`public`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(router);

// 하나의 포트로 두개의 서버를 돌린다 (웹소켓 + http 통신)
webSocket(app.listen(3000, ()=>{
	console.log(`server is running`);
})
);

