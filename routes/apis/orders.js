const express = require("express");
const router = express.Router();

// @route GET api/orders
// @desc Test users
// @accesss Public

router.get("/", (req, res) => res.send("Orders Route"));

module.exports = router;
