const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    target: { type: String, required: true },
    blockers: [{ type: String, required: true }],
    bgColor: { type: String, enum: ["federal-blue", "goldenrod", "avocado", "pantone-orange"], required: true },
    author: mongoose.ObjectId
});

module.exports = mongoose.model("Card", cardSchema);