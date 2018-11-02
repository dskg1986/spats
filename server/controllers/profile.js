var mongoose = require('mongoose');
var User = require('../models/user');

module.exports.profileRead = function(req, res) {
  // If no user ID exists in the JWT return a 401
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    // Otherwise continue
    User
    .findById(req.payload._id)
    .exec(function(err, user) {
      res.status(200).json(user);
    });
  }
};

module.exports.userExists = function(req, res) {
  console.log(req);
  if(!req.body.email) {
    return res.status(401).json({
      "message" : "No User Found"
    });
  }
  User.findOne({email: req.body.email}, function(err, user) {
    if(err) {
      console.log(err);
      return res.send(err);
    }
    if(user._id) {
      return true;
    }
    return false;
  });
}

module.exports.updateProfile = function(req, res) {
  console.log('Got into profile controller');
  console.log(req.body);
  if (!req.body._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    User.findById(req.body._id, function(err, user) {
      if(err) {
        console.log(err);
        return res.send(err);
      }
      console.log('found user');
      if(req.body.firstName) { user.firstName = req.body.firstName; }
      if(req.body.middleInitial) { user.middleInitial = req.body.middleInitial; }
      if(req.body.lastName) { user.lastName = req.body.lastName; }
      if(req.body.primePhone) { user.primePhone = req.body.primePhone; }
      if(req.body.altPhone) { user.altPhone = req.body.altPhone; }
      if(req.body.email) { user.email = req.body.email; }
      if(req.body.altEmail) { user.altEmail = req.body.altEmail; }
      if(req.body.lastUseDate) { user.lastUseDate = Date.now(); }
    
      user.save(function(err) {
        if (err) {
          console.log(err);
          return res.send(err);
        }
        console.log("User Updated");
        res.status(200).json({"message": "User profile updated."});
      });
    });
  }
};