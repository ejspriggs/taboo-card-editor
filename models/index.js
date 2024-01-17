const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODBURI);
const db = mongoose.connection;

db.on("connected", () => {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}.`);
});

module.exports = {
    userModel: require("./user"),
    cardModel: require("./card"),
    seedData: require("./seed")
};