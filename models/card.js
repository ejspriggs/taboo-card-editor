const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    target: { type: String, required: true },
    blockers: [{ type: String, required: true }]
    // Add author
});

module.exports = mongoose.model("Card", cardSchema);