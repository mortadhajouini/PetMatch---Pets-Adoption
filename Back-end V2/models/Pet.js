const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    type: { type: String, required: true },
    description: { type: String }
});

module.exports = mongoose.model('Pet', petSchema);
