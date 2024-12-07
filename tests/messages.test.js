const messageDb = require("../models/messages");

const database = messageDb.messages;

describe("Reading Items From Database", () => {
    it("Returns all items", () => {
        expect(messageDb.getAllMessages().length).toBe(database.length);
    });
});
