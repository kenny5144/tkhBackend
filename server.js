console.log("is this on");
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 3000;


// app.listen(PORT, function() {
// 	console.log(`Server is live! Listening at port ${PORT}`);
// 	// if this does not work, remember to save your file after each major change
// })
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.get('/', function (req, res){
	res.sendFile(__dirname + '/index.html');
	// if this does not work, remember to save your file after each major change
})

app.post('/users', (req, res) => {
	console.log(req.body)
})
app.listen(PORT, function() {
	console.log(`Server is live! Listening at port ${PORT}`);
})