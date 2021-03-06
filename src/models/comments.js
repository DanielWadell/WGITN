const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    body: {
        type: String,
        required: true
    }
})


const Comment = mongoose.model('comment', CommentSchema);

module.exports = Comment;