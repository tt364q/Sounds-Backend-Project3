const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packSchema = new Schema({
  title: String,
  sound: String,
}, {
  timestamps: true
});

// Here's an example of Mongoose Middleware
// Ensure that initials are uppercase & not longer than 3 characters
// packSchema.pre('save', function (next) {
//   this.initials = this.initials.substr(0, 3).toUpperCase();
//   next();
// });

module.exports = mongoose.model('Pack', packSchema);