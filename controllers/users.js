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
    res.render("user-create-edit", { isEdit: false });
});

router.get("/:user", (req, res) => {
    // res.redirect(`/users/${req.params.user}/cards`); <-- Switch to this?
    userModel.findById(req.params.user).then( (user) => {
        res.render("user-show", { user: user });
    }).catch( (reason) => {
        console.log(reason);
        res.redirect("404");
    });
});

router.get("/:user/edit", (req, res) => {
    userModel.findById(req.params.user).then( (user) => {
        res.render("user-create-edit", { user: user });
    }).catch( (reason) => {
        console.log(reason);
        res.redirect("404");
    });
});

router.post("/", (req, res) => {
    userModel.create(req.body).then( (createResult) => {
        console.log(createResult);
        res.redirect("/");
    }).catch( (reason) => {
        console.log(reason);
        res.redirect("404");
    });
});

router.put("/:user", (req, res) => {
    userModel.findByIdAndUpdate(req.params.id, req.body).then( (updateResult) => {
        console.log(updateResult);
        res.redirect(`/${req.params.user}`);
    }).catch( (reason) => {
        console.log(reason);
        res.redirect("404");
    });
});

router.delete("/:user", (req, res) => {
    userModel.findByIdAndDelete(req.params.user).then( (deletionSummary) => {
        console.log(deletionSummary);
        res.redirect("/");
    }).catch( (reason) => {
        console.log(reason);
        res.redirect("404");
    });
});

module.exports = router;