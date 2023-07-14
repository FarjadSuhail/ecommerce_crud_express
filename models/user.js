const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    roles: {
        type: [String],
        default: [],
        required: false
    }
});

module.exports = mongoose.model('User', userSchema);