// Requires external to this project

const path = require("path");
const express = require("express");
if (process.env.ON_HEROKU === "false") {
    const livereload = require("livereload");
    const connectLivereload = require("connect-livereload");
}
const methodOverride = require("method-override");
const dotEnv = require("dotenv");
dotEnv.config();

// Requires internal to this project

const usersController = require("./controllers/users");
const cardsController = require("./controllers/cards");
const models = require("./models/index");
    const userModel = models.userModel;
    const cardModel = models.cardModel;
    const seedUser = models.seedData.user;
    const seedCards = models.seedData.cards;

// Set up express.js in the usual way

const app = express();
if (process.env.ON_HEROKU === "false") {
    const livereloadServer = livereload.createServer();
    livereloadServer.server.once("connection", () => {
        setTimeout(() => {
            livereloadServer.refresh("/");
        }, 100);
    });
}
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(connectLivereload());
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

// Mount controllers

usersController.use("/:user/cards", cardsController);
app.use("/users", usersController);

// Non-REST routes

app.get("/", (req, res) => {
    res.redirect("/users");
});

app.get("/nuke", async (req, res) => {
    // TODO: Remove this route for "production," later.
    const userDeletionSummary = await userModel.deleteMany({});
    console.log(`Deleted all user documents from collection (total ${userDeletionSummary.deletedCount}).`);
    const cardDeletionSummary = await cardModel.deleteMany({});
    console.log(`Deleted all card documents from collection (total ${cardDeletionSummary.deletedCount}).`);
    const userCreateResult = await userModel.create(seedUser);
    console.log("Inserted seed user.");
    for (let card of seedCards) {
        card.author = userCreateResult._id;
    }
    const cardInsertManyResult = await cardModel.insertMany(seedCards);
    console.log(`Inserted ${cardInsertManyResult.length} seed cards referencing seed user as author.`);
    res.redirect("/");
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