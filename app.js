const express = require("express");
const { messages } = require("./models/messages");

const app = express();
const messagesRouter = require("./routes/messagesRoutes");

app.set("view engine", "ejs");

app.use("/", messagesRouter);

const PORT = 8080;

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
