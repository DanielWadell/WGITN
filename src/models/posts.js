const mongoose = require('mongoose');
const Comment = require('./comments')
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
        required: true
    },
    downvote: {
        type: Number,
        required: true
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
    }
})


const Post = mongoose.model('post', PostSchema);

module.exports = Post;