const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Hello World, DB1 Global Software")
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});