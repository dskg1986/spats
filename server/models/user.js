var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var UserSchema = new mongoose.Schema({
  email : { type: String, unique: true, required: true },
  altEmail : { type: String },
  firstName : { type : String, required : true },
	middleInitial : { type : String },
	lastName : { type : String, required : true },
  primePhone : { type : String },
  altPhone : { type: String },
  hash: String,
  salt: String,
  lastUseDate : Date,
  locked: { type: Boolean, required: true },
  failedAttempts: { type: Number, required: true },
  passwordReset: { type: Boolean },
  userType: { type: String, required: true, enum: ["Internal", "External"] },
  userRoles: [{
    role : { type: String, require: true },
    office : {type: String, required: true}
  }],
  // affiliations : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Organization' }]
});

/*
var autoPopulateAffiliations = function(next) {
  this.populate('affiliations');
  next();
};
*/

UserSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

UserSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};

UserSchema.methods.isLocked = function() {
  if(this.locked) {
    return "Account is locked";
  }
}

UserSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    firstName: this.firstName,
    lastName: this.lastName,
    exp: parseInt(expiry.getTime() / 1000),
  }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

/*
UserSchema.
  pre('findOne', autoPopulateAffiliations);
*/

module.exports = mongoose.model('User', UserSchema);