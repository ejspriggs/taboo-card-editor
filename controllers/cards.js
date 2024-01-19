const express = require("express");
const router = express.Router({ mergeParams: true });
// TODO: Remove the "mergeparams" bit up there, after OAuth is implemented.

const models = require("../models/index");
const { default: mongoose } = require("mongoose");
    const userModel = models.userModel;
    const cardModel = models.cardModel;

router.get("/", (req, res) => {
    cardModel.find({ author: req.params.user }).then( (cards) => {
        userModel.findById(req.params.user).then( (user) => {
            res.render("index-cards", { user: user, cards: cards });
        }).catch( (reason) => {
            console.log(reason);
            res.render("404");
        });
    }).catch( (reason) => {
        console.log(reason);
        res.render("404");
    });
});

router.get("/new", (req, res) => {
    userModel.findById(req.params.user).then( (user) => {
        if (user == null) { // Also matches "undefined"
            res.render("404");
        } else {
            res.render("card-create-edit", { isEdit: false, user: user });
        }
    }).catch( (reason) => {
        console.log(reason);
        res.render("404");
    });
});

router.get("/:card", (req, res) => {
    res.send(`Getting card detail page for user "${req.params.user}", card "${req.params.card}"...`);
});

router.get("/:card/edit", (req, res) => {
    res.send(`Getting edit card form for user "${req.params.user}", with seed data from card "${req.params.card}"...`);
});

router.post("/", (req, res) => {
    cardModel.create({
        target: req.body.target,
        blockers: [
            req.body.blocker1,
            req.body.blocker2,
            req.body.blocker3,
            req.body.blocker4,
            req.body.blocker5
        ],
        bgColor: req.body.bgColor,
        author: new mongoose.Types.ObjectId(req.body.authorId)
    }).then( (createResult) => {
        res.redirect("/users/" + req.params.user + "/cards");
    }).catch( (reason) => {
        console.log(reason);
        res.render("404");
    });
});

router.put("/:card", (req, res) => {
    res.send(`Editing card "${req.params.card}" for user "${req.params.user}"...`);
});

router.delete("/:card", (req, res) => {
    cardModel.findByIdAndDelete(req.params.card).then( (deletionSummary) => {
        res.redirect("/users/" + req.params.user + "/cards");
    }).catch( (reason) => {
        console.log(reason);
        res.render("404");
    });
});

module.exports = router;