const connect = require('connect');
const app = connect();
app.use((req, res, next) => {
	res.end('Hello, world!');
});
app.listen(3000);