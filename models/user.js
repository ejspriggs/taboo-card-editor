const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    currentColor: { type: String, enum: ["federal-blue", "goldenrod", "avocado", "pantone-orange"], required: true }
});

module.exports = mongoose.model("User", userSchema);