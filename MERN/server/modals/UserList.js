import mongoose   from 'mongoose';
let Schema = mongoose.Schema;

/*
  collection - specifies which collection to search for in db
  else mongoose looks for small case plural of first param in mongoose.modal
  which in this case UserList - userlists
*/
let userSchema = new Schema({
  firstName: {type: String, required: [true, 'Don`t you have a name?']},
  lastName: String,
  middleName: String,
  userName: String,
  emailAddress: [{isPrimary: Boolean, emailId: String}],
  password: String,
  salt: String,
  hash: String,
  createdDate: {type: Date, default: Date.now},
  isActive: {type: Boolean, default: true}
}, {collection: 'userLists'});

// create a model using Schema
let User = mongoose.model('UserList', userSchema);

User.save = (userInfo) => {
  let userEntity = new User(userInfo);
  userEntity.save((err) => {});
};

module.exports = User;
