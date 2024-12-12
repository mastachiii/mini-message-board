const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");

    return rows;
}

async function getMessage(id) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);

    return rows[0];
}

async function addMessage(username, message) {
    await pool.query("INSERT INTO messages (username, message) VALUES ($1, $2)", [username, message]);
}

async function deleteMessage(id) {
    await pool.query("DELETE FROM messages WHERE id = $1", [id]);
}

module.exports = { getAllMessages, addMessage, getMessage, deleteMessage };
