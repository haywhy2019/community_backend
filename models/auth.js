const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
  name: String,
  businessName: String,
  email: String,
  phoneNumber: Number,
  whatsApp: Number,
  instagram: String,
  description: String
});

const Auth = mongoose.model("Auth", AuthSchema);

module.exports = Auth;
