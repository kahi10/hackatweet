var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
require('../models/connection');
const User = require('../models/users');
const { checkBody } = require('../modules/checkBody');
const uid2 = require('uid2');
const bcrypt = require('bcrypt');

//Route pour inscrire un utilisateur
router.post('/signup', (req, res) => {
  if (!checkBody(req.body, ['firstname', 'username', 'password'])){
      console.log("Empty")
      res.json({ result: false, error: 'Missing or empty fields' });
      return
  }

  User.findOne({username: req.body.username}).then(data => {
      if (data) {
        //L'utilisateur existe dèja dans la base de données
        res.json({result: false, error: 'User already exists'});
      } else {
        // Créer un nouvel utilisateur
        const hash = bcrypt.hashSync(req.body.password, 10);

        const newUser = new User({
          firstname: req.body.firstname,
          username: req.body.username,
          password: hash,
          token: uid2(32),
        });
        newUser.save().then(() => {
            User.find().then(data => {
                res.json({ result: true });
            })
        });
      }
  })	
});

//Route chargée de vérifier la connexion d’un utilisateur
router.post('/signin', (req, res) => {
  if (!checkBody(req.body, ['username', 'password'])){
      res.json({ result: false, error: 'Missing or empty fields' });
      return
  }
  User.findOne({username: req.body.username}).then(data => {
    if (data && bcrypt.compareSync(req.body.password, data.password)) {
      res.json({ result: true, user: data});
    } else {
      res.json({ result: false, error: 'User not found or wrong password' });
    }
  });
});


module.exports = router;
