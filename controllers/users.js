const express = require("express");
const router = express.Router();

const models = require("../models/index");

router.get("/", (req, res) => {
    res.send("Getting user index...");
});

router.get("/new", (req, res) => {
    res.send("Getting new user form without seed data...");
});

router.get("/:id", (req, res) => {
    res.send(`Getting user detail page for user "${req.params.id}"...`);
});

router.get("/edit/:id", (req, res) => {
    res.send(`Getting new user form with seed data for user "${req.params.id}"...`);
});

router.post("/", (req, res) => {
    res.send("Adding new user...");
});

router.put("/:id", (req, res) => {
    res.send(`Editing user ${req.params.id}...`);
});

router.delete("/:id", (req, res) => {
    res.send(`Deleting user ${req.params.id}...`);
});