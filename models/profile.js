const mongoose = require("mongoose");
const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  moblieNo: {
    type: String,
  },
  interests: {
    type: String,
  },
  occupation: {
    type: String,
  },
  about: {
    type: String,
  },
  websiteUrl: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = profile = mongoose.model("profile", ProfileSchema);
