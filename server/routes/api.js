var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');

router.use(function(err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
  var ip = req.connection.remoteAddress || 
      req.socket.remoteAddress || 
      req.connection.socket.remoteAddress;
  // do logging
  console.log('Somebody just came to our api! ' + ip)
  // console.log();
  next();
});

router.get('/', function(req, res) {
  console.log("got into the / part");
  res.json({ message: 'Hooray! Welcome to the Banana api!' });
});
router.get('/private', function(req, res) {
  res.json({message: "Well this is really a private matter"});
});

// profile
router.get('/profile', auth, ctrlProfile.profileRead)
router.post('/userExists', ctrlProfile.userExists);
router.post('/updateProfile',auth, ctrlProfile.updateProfile);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


module.exports = router;
