// Requires external to this project

const path = require("path");
const express = require("express");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const methodOverride = require("method-override");

// Requires internal to this project

const usersController = require("./controllers/users");
const cardsController = require("./controllers/cards");
const models = require("./models/index");

// Set up express.js in the usual way

const app = express();
const livereloadServer = livereload.createServer();
livereloadServer.server.once("connection", () => {
    setTimeout(() => {
        livereloadServer.refresh("/");
    }, 100);
});
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(connectLivereload());
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

// Mount controllers

app.use("/users", usersController);
app.use("/cards", cardsController);

// Non-REST routes

app.get("/", (req, res) => {
    res.redirect("/users");
});

app.get("/nuke", (req, res) => {
    // TODO: Implement this
    // TODO: Remove this
    res.send("Nuking all database contents and reseeding...");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("*", (req, res) => {
    res.render("404");
});

// Start server

app.listen(process.env.PORT, () => {
    console.log(`Express is listening on port ${process.env.PORT}.`);
});