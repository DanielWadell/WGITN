const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comments'
    }],

    upvote: {
        type: Number,
        default:0
    },
    downvote: {
        type: Number,
        default: 0
    },
    img: {
        data: Buffer,
        contentType: String
    },
    tag: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comments',
    }]
});


const Post = mongoose.model('post', PostSchema);

module.exports = Post;