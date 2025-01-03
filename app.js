const express = require("express");

const app = express();
const messagesRouter = require("./routes/messagesRoutes");

app.set("view engine", "ejs");

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use("/", messagesRouter);

const PORT = process.env.PORT || 2122;
app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
