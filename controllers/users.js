const express = require("express");
const router = express.Router();

const models = require("../models/index");
    const userModel = models.userModel;
    const cardModel = models.cardModel;

router.get("/", (req, res) => {
    userModel.find({}).then( (users) => {
        res.render("index-users", { users: users });
    });
});

router.get("/new", (req, res) => {
    res.send("Getting new user form without seed data...");
});

router.get("/:user", (req, res) => {
    res.send(`Getting user detail page for user "${req.params.user}"...`);
});

router.get("/:user/edit", (req, res) => {
    res.send(`Getting new user form with seed data for user "${req.params.user}"...`);
});

router.post("/", (req, res) => {
    res.send("Adding new user...");
});

router.put("/:user", (req, res) => {
    res.send(`Editing user ${req.params.user} with ${JSON.stringify(req.body)}...`);
});

router.delete("/:user", (req, res) => {
    res.send(`Deleting user ${req.params.user}...`);
});

module.exports = router;