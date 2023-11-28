console.log("Node is running.");
const express = require("express");
const app = express();
app.use(express.static("public"));
const MongoClient = require("mongodb").MongoClient;
MongoClient.connect(
	"mongodb+srv://mongodb:123abc123abc123abc098@basiccluster.kc7cumg.mongodb.net/?retryWrites=true&w=majority",
	{ useUnifiedTopology: true }
).then((client) => {
	console.log("Connected to mongo database");
});

app.use("/", require("./server/routes/index"));
app.use("/portfolio", require("./server/routes/portfolio"));
app.use("/blog", require("./server/routes/blog"));

app.listen(3000, function () {
	console.log("listening on port 3000.");
});
