const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
    contenu: String,
    date: Date,
    createPerson: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    likePerson: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],

});

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;