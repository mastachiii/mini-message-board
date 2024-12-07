const messageDb = require("../models/messages");

const database = messageDb.messages;

describe("Reading Items ", () => {
    it("Returns all items", () => {
        expect(messageDb.getAllMessages().length).toBe(database.length);
    });

    it("Returns Specific Item", () => {
        expect(messageDb.getMessage(2).id).toBe(2);
    });
});

describe("Deleting Items", () => {
    it("Removes a specific message", () => {
        messageDb.removeMessage(2);

        const deletedMessage = messageDb.getMessage(2);

        expect(deletedMessage).toBe(undefined);
    });
});

describe("Adding Items", () => {
    it("Doesn't allow null values", () => {
        expect(messageDb.addMessage()).toBeNull();
    });

    it("Adds message", () => {
        messageDb.addMessage('Se7en is Great!', 'uncAdih123');
        expect(messageDb.getAllMessages().length).toBe(3);
        expect(messageDb.getMessage(4)).toBeTruthy();
    });
});
