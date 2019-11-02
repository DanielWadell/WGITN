const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and Model

const UserSchema = new Schema({
    log_in: {
        user_name: String,
        password: String
    },
    information: {
         f_name: String,
        l_name: String,
        city: String
    }
    
});

const User = mongoose.model('user', UserSchema);

module.exports = User;