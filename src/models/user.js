const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Posts'
    }],
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
    
});

UserSchema.statics.findByCredentials = async (user_name, password) => {
    
    const user = await User.findOne({ user_name, password })

    console.log(user)
    if (!user) {
        throw new Error('Unable to login')
    }

    return user
}

UserSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET)

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}

const User = mongoose.model('user', UserSchema);

module.exports = User;