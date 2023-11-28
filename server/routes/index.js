const express = require("express");
const router = express.Router();

const pages_url = require("../settings");

router.get("/", (req, res) => {
	// res.send("Hello world");
	res.render(pages_url + "/index.ejs");
});

router.get("/about", (req, res) => {
	res.render(pages_url + "/about.ejs");
});

router.get("/services", (req, res) => {
	res.render(pages_url + "/services.ejs");
});

module.exports = router;
