var passport = require('passport');
var mongoose = require('mongoose');
var User = require('../models/user');

module.exports.register = function(req, res) {
  var user = new User();

  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.email = req.body.email;
  user.userType = req.body.userType;
  user.lastUseDate = Date.now();
  user.locked = false;
  user.failedAttempts = 0;

  user.setPassword(req.body.password);

  user.save(function(err) {
    if (err) {
      console.log(err);
      return res.send(err);
    }
    var token;
    token = user.generateJwt();
    console.log("User Created");
    res.status(200);
    res.json({
      "token" : token
    });
    
  });
};

module.exports.login = function(req, res) {
  passport.authenticate('local', function(err, user, info){
    var token;
  
    // If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }
    // If a user is found
    if(user){
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    } else if (info.message === 'Password is Wrong') {

    } else {
      // If user is not found
      console.log(info);
      res.status(401).json(info);
    }
  })(req, res);
};

module.exports.BLMLogin = function(req, res) {
  passport.authenticate('ldap', function(req, res, info) {
    res.json(info);
  },
  {
    failureRedirect: '/login/'
  })
};
