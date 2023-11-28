console.log("Node is running.");
const express = require("express");
const app = express();
app.use(express.static("public"));

app.use("/", require("./server/routes/index"));
app.use("/portfolio", require("./server/routes/portfolio"));
app.use("/blog", require("./server/routes/blog"));

app.listen(3000, function () {
	console.log("listening on port 3000.");
});
