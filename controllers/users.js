const express = require("express");
const router = express.Router();

const models = require("../models/index");
    const userModel = models.userModel;

router.get("/", (req, res) => {
    userModel.find({}).then( (users) => {
        res.render("index-users", { users: users });
    });
});

router.get("/new", (req, res) => {
    res.render("user-create-edit", { isEdit: false });
});

router.get("/:user", (req, res) => {
    res.redirect(`/users/${req.params.user}/cards`);
});

router.get("/:user/edit", (req, res) => {
    userModel.findById(req.params.user).then( (user) => {
        res.render("user-create-edit", { isEdit: true, user: user });
    }).catch( (reason) => {
        console.log(reason);
        res.redirect("404");
    });
});

router.post("/", (req, res) => {
    userModel.create(req.body).then( (createResult) => {
        res.redirect("/");
    }).catch( (reason) => {
        console.log(reason);
        res.redirect("404");
    });
});

router.put("/:user", (req, res) => {
    userModel.findByIdAndUpdate(req.params.user, req.body).then( (updateResult) => {
        res.redirect(`/users`);
    }).catch( (reason) => {
        console.log(reason);
        res.redirect("404");
    });
});

router.delete("/:user", (req, res) => {
    userModel.findByIdAndDelete(req.params.user).then( (deletionSummary) => {
        res.redirect("/users");
    }).catch( (reason) => {
        console.log(reason);
        res.redirect("404");
    });
});

module.exports = router;