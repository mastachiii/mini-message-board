const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>hello world!</h1>");
});

const PORT = 8080;

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));


