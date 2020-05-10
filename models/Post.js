const mongose = require('mongoose');

const Post = mongose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongose.model('Post', Post, 'Posts');