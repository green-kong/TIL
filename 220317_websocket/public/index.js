let webSocket;
let userid;
function connectSocket(){
	webSocket = new WebSocket(`ws://localhost:3000`);
    
	webSocket.onopen = () => {
		console.log(`웹 소켓 connection 성공 - handshake`);
	};
}

function closeSocket(){
	webSocket.onclose = () => {
		console.log(`웹소켓 disconnection`);
	};
}

function submitHandler(e) {
	e.preventDefault();
	const { input } = e.target;
	let data = {
		type: `send_msg`,
		data: input.value,
		author: userid
	};

	webSocket.send(JSON.stringify(data));
	input.value = ``;
	input.focus();
}

function makeChat(){
	webSocket.onmessage = (event) => {
		const chatting = JSON.parse(event.data);
		const chat = document.querySelector(`#chat`);
		const liEliment = document.createElement(`li`);
		const author = document.createElement(`p`);
		liEliment.innerHTML = chatting.data;
		author.innerHTML = chatting.author;
		liEliment.appendChild(author);
		chat.appendChild(liEliment);

		console.log(chatting.author);
		if(chatting.author === userid ){
			liEliment.style.color = `red`;
		}
	};
} 

function init(){
	const form = document.querySelector(`form`);
	userid = document.querySelector(`#userData`).value;
	console.log(userid); // userid 가져옴
	form.addEventListener(`submit`, submitHandler);

	connectSocket();
	closeSocket();
	makeChat();
}

document.addEventListener(`DOMContentLoaded`, init);