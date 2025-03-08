const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String},
  verifiedEmail: { type: Boolean},
  name: { type: String},
  picture: { type: String }, // Profile picture URL
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
