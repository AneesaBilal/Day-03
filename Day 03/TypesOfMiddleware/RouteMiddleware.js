function checkUser(req, res, next) {
    console.log("Checking User...");
    next();
}

app.get("/profile", checkUser, (req, res) => {
    res.send("Profile");
});