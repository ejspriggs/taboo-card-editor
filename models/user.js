const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    currentColor: { type: String, enum: ["federalBlue", "goldenrod", "avocado", "pantoneOrange"], required: true }
});

module.exports = mongoose.model("User", userSchema);