const express = require("express");
const router = express.Router({ mergeParams: true });
// TODO: Remove the "mergeparams" bit up there, after OAuth is implemented.

const models = require("../models/index");

router.get("/", (req, res) => {
    res.send(`Getting card index for user "${req.params.user}"...`);
});

router.get("/new", (req, res) => {
    res.send(`Getting edit card form for user "${req.params.user}", without seed data...`);
});

router.get("/:card", (req, res) => {
    res.send(`Getting card detail page for user "${req.params.user}", card "${req.params.card}"...`);
});

router.get("/:id/edit", (req, res) => {
    res.send(`Getting edit card form for user "${req.params.user}", with seed data from card "${req.params.id}"...`);
});

router.post("/", (req, res) => {
    res.send(`Adding new card for user "${req.params.user}"...`);
});

router.put("/:card", (req, res) => {
    res.send(`Editing card "${req.params.card}" for user "${req.params.user}"...`);
});

router.delete("/:card", (req, res) => {
    res.send(`Deleting card "${req.params.card}" for user "${req.params.user}"...`);
});

module.exports = router;