let express = require('express');
let cors = require('cors');
let app = express();

app.use(express.static(__dirname));
app.use(cors());
app.use(async (req, res) => {
	res.end(new Date().toLocaleString());
});

app.listen(3000);

/**
 * 轮询
 * - 客户端每秒不停地向服务端请求
 */
