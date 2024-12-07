const messagesDB = require("../models/messages");

function messages_index(req, res) {
    const messages = messagesDB.getAllMessages();

    res.render("index", { messages });
}

function messages_form(req, res) {
    res.render("createForm");
}

function messages_details(req, res) {
    const id = +req.params.id;
    const message = messagesDB.getMessage(id);

    res.render("details", { user: message.user, message: message.message, date: message.date, id: message.id });
}

function create_message(req, res) {
    const message = req.body.message;
    const user = req.body.username;

    messagesDB.addMessage(message, user);
    res.status(201).redirect("/");
}

function delete_message(req, res) {
    const id = +req.params.id;

    messagesDB.removeMessage(id);
    res.json({ redirect: "/" });
}

module.exports = { messages_index, messages_form, create_message, messages_details, delete_message };
