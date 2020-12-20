// require mongoose
const mongoose = require('mongoose');
//create a shortcut variable for Schema
const Schema = mongoose.Schema;


const producerSchema = new Schema( {
    title: String,
}, { timestamps: true });

module.exports = mongoose.model('Producer', producerSchema);