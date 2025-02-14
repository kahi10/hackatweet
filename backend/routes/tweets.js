var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");
const Tweet = require("../models/tweets");
const { checkBody } = require("../modules/checkBody");

router.post("/", (req, res) => {
  if (!checkBody(req.body, ["contenu", "tokenCreateperson"])) {
    console.log("Empty");
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }
  const newTweet = new Tweet({
    contenu: req.body.contenu,
    date: new Date(),
    createperson: req.body.tokenCreateperson,
    likeperson: [],
  });
  newTweet.save().then((savedTweet) => {
    Tweet.findById(savedTweet._id)
      .populate("createperson")
      .populate("likeperson")
      .then((data) => {
        res.json({ result: true, data: data });
      });
  });
});

router.get("/hashtag/:nom", function (req, res) {
  if (!checkBody(req.params, ["nom"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }

  Tweet.find({ contenu: { $regex: new RegExp(req.params.nom, "i") } }).then(
    (data) => {
      if (data.length) {
        res.json({ result: true, tweets: data });
      } else {
        res.json({ result: false, error: "No tweet found" });
      }
    }
  );
});

router.delete('/:tweetId', (req, res) => {
    if (!checkBody(req.body, ['username'])||!checkBody(req.params,['tweetId'])) {
        res.json({ result: false, error: 'Missing tweet ID or user ID' });
        return
    }

    Tweet.findById(req.params.tweetId)
    .then(tweet => {
        if (!tweet) {
            res.json({ result: false, error: 'Tweet not found' });
            return;
        }

        if (tweet.createperson.toString() !== req.body.username) {
            res.json({ result: false, error: " You can't delete this tweet" });
            return;
        }

        // Supprimer le tweet
        Tweet.deleteOne({ _id: req.params.tweetId }).then(() => {
            res.json({ result: true, message: 'Tweet deleted successfully' });
        });
    })
});

module.exports = router;
