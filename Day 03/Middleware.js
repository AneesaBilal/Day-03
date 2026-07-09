const express = require("express");

const app = express();

function logger(req, res, next) {
    console.log("Request received");
    next();
}

app.use(logger);

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.listen(3000);