require("dotenv").config();

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

async function main() {
    console.log("populating db...");
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();
