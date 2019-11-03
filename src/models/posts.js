const mongoose = require('mongoose');
const Comment = require('comments')
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
        type: Comment,
        required: true
    }],
    upvote: {
        type: Number,
        required: true
    },
    downvote: {
        type: Number,
        required: true
    }
})


const Post = mongoose.model('post', PostSchema);

module.exports = Post;