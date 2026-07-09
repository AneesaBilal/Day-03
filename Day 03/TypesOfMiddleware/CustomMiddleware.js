function welcome(req, res, next) {
    console.log("Welcome User");
    next();
}

app.use(welcome);