var mongoose = require('mongoose');

var OrganizationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  streetAddress: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  email: { type: String, required: true},
  phoneNumber: { type: String, required: true },
  faxNumber: { type: String },
  website: { type: String }
});

module.exports = mongoose.model('Organization', OrganizationSchema);