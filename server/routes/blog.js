const express = require("express");
const router = express.Router();

const pages_url = require("../settings");

router.get("/", (req, res) => {
	res.render(pages_url + "/blog.ejs");
});

// router.get("/details", (req, res) => {
// 	// res.send("Hello world");
// 	res.render(pages_url + "/portfolio_details.ejs");
// });

module.exports = router;
