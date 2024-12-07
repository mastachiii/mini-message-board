const express = require("express");
const { messages } = require("./models/messages");
const app = express();

app.set("view engine", "ejs");

// app.get("/", (req, res) => { });

const PORT = 8080;

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
