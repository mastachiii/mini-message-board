const messages = [
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

function getAllMessages() {
    return messages;
}

// TODO: Fetch Specific Messages.

// TODO: Remove Messages.

// TODO: Add Messages.

module.exports = { messages, getAllMessages };
