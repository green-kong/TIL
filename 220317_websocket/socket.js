const webSocket = require(`ws`);

let sockets = []; 
let wsConnector;

const closeCb = ()=> {
	console.log(`고객이 나감`);
	sockets = sockets.filter(v=>{
		console.log(wsConnector.id === v.id);
		return wsConnector.id !== v.id;
	});
	console.log(sockets.length, `명 남음`); 
};

const msgCb = (response) => {
	let obj = JSON.parse(response.toString(`utf-8`));
	let { type, data, author } = obj;
	let chatting = { data, author };
	console.log(`메시지`, sockets.length);
	switch(type){
	case `send_msg`:
		sockets.forEach( v => {
			v.send(JSON.stringify(chatting));
		});
		break;
	}
};

const connetionCb = (ws, req) => {
	ws.id = req.headers[`sec-websocket-key`];
	sockets.push(ws);
	wsConnector = ws;
	console.log(sockets.length); 
	console.log(`접속됐나?`);
	ws.on(`close`, closeCb );
	ws.on(`message`, msgCb);
};

module.exports = (server) => {
	const wss = new webSocket.Server({ server });
	wss.on(`connection`, connetionCb );
};
