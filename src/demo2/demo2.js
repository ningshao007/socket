let express = require('express');
let cors = require('cors');
let app = express();

function sleep(time) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, time);
	});
}

app.use(express.static(__dirname));
app.use(cors());
app.use(async (req, res) => {
	await sleep(10000);
	res.end(new Date().toLocaleString());
});

app.listen(3000);

/**
 * 长轮询
 * - 这个是对demo1的改进版
 * - 客户端发送http请求给服务器,如果没有新消息,则一直等待
 */
