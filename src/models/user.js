const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

//Create Schema and Model

const UserSchema = new Schema({
    user_name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 7
    },
    posts: [{
        type: String,
        ref: 'Posts',
        required: true
    }]
    
});

UserSchema.statics.findByCredentials = async (user_name, password) => {
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