const express = require("express");
const router = express.Router();

const models = require("../models/index");

router.get("/", (req, res) => {
    res.send("Getting card index...");
});

router.get("/new", (req, res) => {
    res.send("Getting new card form without seed data...");
});

router.get("/:id", (req, res) => {
    res.send(`Getting card detail page for card "${req.params.id}"...`);
});

router.get("/:id/edit", (req, res) => {
    res.send(`Getting new card form with seed data for card "${req.params.id}"...`);
});

router.post("/", (req, res) => {
    res.send("Adding new card...");
});

router.put("/:id", (req, res) => {
    res.send(`Editing card ${req.params.id}...`);
});

router.delete("/:id", (req, res) => {
    res.send(`Deleting card ${req.params.id}...`);
});