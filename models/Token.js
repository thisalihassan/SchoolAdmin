const mongoose = require("mongoose");
const User = require("./Users");
const tokenSchema = new mongoose.Schema({
  _userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  token: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now, expires: 86400 },
});
module.exports = Token = mongoose.model("token", tokenSchema);
