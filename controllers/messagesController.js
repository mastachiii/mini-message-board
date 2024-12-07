const messagesDB = require("../models/messages");

function messages_index(req, res) {
    const messages = messagesDB.getAllMessages();

    res.render(index, { messages });
}

module.exports = { messages_index };
