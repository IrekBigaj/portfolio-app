console.log("Node is running.");
const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
	// res.send("Hello world");
	res.sendFile(__dirname + "/views/index.html");
});

app.listen(3000, function () {
	console.log("listening on port 3000.");
});
