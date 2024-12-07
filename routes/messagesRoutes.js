const express = require("express");
const router = express.Router();

const controllers = require("../controllers/messagesController");

router.get("/", controllers.messages_index);

module.exports = router;
