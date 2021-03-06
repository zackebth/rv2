
var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
    console.log("Incoming " + req.method + " req to: " + req.path);
    next();
});

router.get("/", (req, res) => {
    res.render("about", {
        title: "About"
    });
});

module.exports = router;
