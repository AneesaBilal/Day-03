const express = require("express");

const app = express();

app.get("/", (req,res,next)=>{

    next(new Error("Server Error"));

});

app.use((err,req,res,next)=>{

    res.status(500).send(err.message);

});

app.listen(3000);