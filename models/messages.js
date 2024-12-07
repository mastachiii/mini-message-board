let messages = [
    {
        id: 1,
        user: "BPitt95",
        message: "Whats in the box???",
        date: new Date(),
    },
    {
        id: 2,
        user: "throwaway1234",
        message: "Express is great!",
        date: new Date(),
    },
    {
        id: 3,
        user: "pyDev9483",
        message: "bacon spam bacon spam bacon spam",
        date: new Date(),
    },
];

let IDCounter = 3; // Much better than relying on length of messages DB as it can change overtime and can lead to id dupes.

function getAllMessages() {
    return messages;
}

function getMessage(id) {
    return messages.find(m => m.id === id);
}

function removeMessage(id) {
    messages = messages.filter(m => m.id !== id);
}

function addMessage(message, user) {
    if (!message || !user) return null;

    IDCounter++;

    const messageObj = {
        id: IDCounter,
        message,
        user,
        date: new Date(),
    };

    messages.push(messageObj);
}

module.exports = { messages, getAllMessages, getMessage, removeMessage, addMessage };
