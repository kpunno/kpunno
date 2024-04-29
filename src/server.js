const express = require('express');
const app = express();
const path = require('path');;
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(PORT,() => {
	try {
		console.log(`app started on port ${PORT}`);
	}
	catch (err) {
		console.log(err);
	}
});
