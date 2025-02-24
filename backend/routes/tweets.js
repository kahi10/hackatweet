var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");
const Tweet = require("../models/tweets");
const User = require("../models/users"); 
const { checkBody } = require("../modules/checkBody");

// poster le tweet par l'utlisateur

router.post("/", (req, res) => {
  if (!checkBody(req.body, ["contenu", "createPerson"])) {
    console.log("Empty");
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }

  User.findOne({ token: req.body.createPerson }).then((user) => {
    if (!user) {
      return res.json({ result: false, error: "Utilisateur non trouvé" });
    }

    const newTweet = new Tweet({
      contenu: req.body.contenu,
      date: new Date(),
      createPerson: user._id, 
      likePerson: [],
    });

    newTweet
      .save()
      .then((savedTweet) => savedTweet.populate(["createPerson", "likePerson"]))
      .then((populatedTweet) => {
        res.json({ result: true, tweet: populatedTweet });
      })
     
  })
});


//afficher toutes les tweets des utlisateurs
router.get("/", (req, res) => {
  Tweet.find()
    .populate("createPerson")
    .populate("likePerson")
    .then((tweets) => {
      res.json({ result: true, tweets: tweets });
    });
});

//trouver tous les  tweet avec son #nom de hashtag
router.get("/hashtag/:nomHashtag", function (req, res) {
  const { nomHashtag } = req.params;
  console.log(nomHashtag);
  if (!nomHashtag || nomHashtag.trim() === "") {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }

  Tweet.find({
    contenu: { $regex: new RegExp(`#${nomHashtag}\\b`, "i") },
  }).then((data) => {
    if (data.length) {
      res.json({ result: true, tweets: data });
    } else {
      res.json({ result: false, error: "No tweet found" });
    }
  });
});

//afficher les compteurs de hastag sur trends
router.get("/hashtag", (req, res) => {
  let tweetsObject;
  Tweet.find({ contenu: { $regex: new RegExp("#\\b", "i") } }).then(
    (tweets) => {
      if (tweets) {
        for (let i = 0; i < tweets.length; i++) {
          if (tweetsObject[tweets[i]]) {
            tweetsObject[tweets[i]] += 1;
          } else {
            tweetsObject[tweets[i]] = 1;
          }
        }
        res.json({ result: true, tweets: tweetsObject });
      } else {
        res.json({ result: false, error: "No hashtag found" });
      }
    }
  );
});

//supprimer les tweet de l'utilisateur
router.delete("/", (req, res) => {
  if (!checkBody(req.body, ["userName", "dateTweet"])) {
    res.json({ result: false, error: "Missing tweet ID or user ID" });
    return;
  }

  const dateTweet = new Date(req.body.dateTweet); // la date de saisir à modifier

  Tweet.findOne({ date: { $regex: new RegExp(`^${dateTweet}`, "i") } }).then(
    (tweet) => {
      if (!tweet) {
        res.json({ result: false, error: "Tweet not found" });
        return;
      }

      if (tweet.createPerson !== req.body.userName) {
        res.json({ result: false, error: " You can't delete this tweet" });
        return;
      }

      Tweet.deleteOne({ _id: tweet._id }).then(() => {
        res.json({ result: true, message: "Tweet deleted successfully" });
      });
    }
  );
});

module.exports = router;
