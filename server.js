console.log("is this on");
const express = require('express');
const app = express();
const PORT = 3000;


// app.listen(PORT, function() {
// 	console.log(`Server is live! Listening at port ${PORT}`);
// 	// if this does not work, remember to save your file after each major change
// })

app.get('/', function (req, res){
	res.sendFile(__dirname + '/index.html');
	// if this does not work, remember to save your file after each major change
})

app.listen(PORT, function() {
	console.log(`Server is live! Listening at port ${PORT}`);
})