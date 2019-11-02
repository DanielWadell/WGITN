const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and Model

const UserSchema = new Schema({
    user_name: String,
    f_name: String,
    l_name: String,
    password: String,
    city: String
});

const User = mongoose.model('user', UserSchema);

module.exports = User;