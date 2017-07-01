const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  passphrase: {
    type: String,
    required: 'Please supply a name',
    trim: true
  }
});

userSchema.plugin(passportLocalMongoose, { usernameField: 'passphrase' });
userSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('User', userSchema);
