const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
    contenu: String,
    date: Date,
    createperson: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    likeperson: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],

});

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;