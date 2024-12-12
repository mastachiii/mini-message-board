const messagesDB = require("../db/query");

async function messages_index(req, res) {
    const messages = await messagesDB.getAllMessages();

    res.render("index", { messages });
}

function messages_form(req, res) {
    res.render("createForm");
}

async function messages_details(req, res) {
    const id = +req.params.id;
    const message = await messagesDB.getMessage(id);

    res.render("details", { user: message.username, message: message.message, id: message.id });
}

async function create_message(req, res) {
    const { message, username } = req.body;

    await messagesDB.addMessage(username, message);
    res.status(201).redirect("/");
}

async function delete_message(req, res) {
    const id = +req.params.id;

    await messagesDB.deleteMessage(id);
    res.json({ redirect: "/" });
}

module.exports = { messages_index, messages_form, create_message, messages_details, delete_message };
