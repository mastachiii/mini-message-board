const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 ),
    message VARCHAR ( 255 )
);

INSERT INTO messages (username, message)
VALUES 
    ('Brad', 'Foo Bar Quox'),
    ('Al', 'I dont know how postgres works.'),
    ('Winona', 'TOP rules!');
`;
