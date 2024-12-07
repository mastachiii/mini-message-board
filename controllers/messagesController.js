const messagesDB = require("../models/messages");

function messages_index(req, res) {
    const messages = messagesDB.getAllMessages();

    res.render("index", { messages });
}

function messages_form(req, res) {
    res.render("createForm");
}

function create_messages(req, res) {
    const message = req.body.message;
    const user = req.body.username;

    messagesDB.addMessage(message, user);
    res.status(201).redirect('/')
}

module.exports = { messages_index, messages_form, create_messages };
