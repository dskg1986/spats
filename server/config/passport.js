var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
//var ldapStrategy = require('passport-ldapauth').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

/*
var OPTS = {
  server: {
    url: 'ldap://ilmdendc03.blm.doi.net:389',
    bindDN: 'cn=root',
    searchBase: 'OU=operations,DC=blm,DC=doi,DC=net',
    searchFilter: '(uid={{username}})'
  }
};
passport.use(new ldapStrategy(OPTS));
*/

passport.use(new LocalStrategy({
  usernameField: 'email'
},
function(username, password, done) {
  User.findOne({ email: username }, function (err, user) {
    if (err) { return done(err); }
    // Return if user not found in database
    if (!user) {
      return done(null, false, {
        message: 'User not found.'
      });
    }
    // if account is locked.
    if (user.isLocked()) {
      return done(null, false, {
        message: 'Account is Locked!  Please Call Admin to reset.'
      });
    };
    // Return if password is wrong
    if (!user.validPassword(password)) {
      if (user.failedAttempts > 4) {
        user.locked = true;
        console.log("User is now Locked")
      }
      user.failedAttempts += 1;
      user.save(function(err) {
        if (err) {
          console.log(err);
          res.send(err);
        }
        console.log("updated user failed count.")
      });
      return done(null, false, {
        message: 'Password is wrong!'
      });
    }
    // If credentials are correct, return the user object
    return done(null, user);
  });
}
));