const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
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

userSchema.statics.findByCredentials = async (user_name, password) => {
    const user = await User.findOne({ user_name })

    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}

const User = mongoose.model('user', UserSchema);

module.exports = User;