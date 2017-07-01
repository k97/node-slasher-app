const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    lowercase: true,
    required: true,
    trim: true
  }
});

userSchema.plugin(passportLocalMongoose, { usernameField: 'name' });
userSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('User', userSchema);
