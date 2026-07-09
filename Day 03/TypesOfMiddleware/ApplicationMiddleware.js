app.use((req, res, next) => {
    console.log("Application Middleware");
    next();
});