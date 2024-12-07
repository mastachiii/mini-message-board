const express = require("express");
const router = express.Router();

const controllers = require("../controllers/messagesController");

router.get("/", controllers.messages_index);
router.get("/messages/create", controllers.messages_form);
router.get("/messages/:id", controllers.messages_details);

router.post("/messages", controllers.create_message);

router.delete("/messages/:id", controllers.delete_message)

module.exports = router;
