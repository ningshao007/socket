const express = require('express');
const cors = require('cors');
const path = require('path');
const http = require('http');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'demo3.html'));
});
app.listen(3000);

const WebSocketServer = require('ws').Server;
const wsServer = new WebSocketServer({ port: 8888 });

wsServer.on('connection', (socket) => {
	console.log('连接成功');
	socket.on('message', (message) => {
		console.log('接收到客户端消息: ' + message.toString());
		socket.send('来自服务端的响应 ~~~~ ' + message);
	});
});
