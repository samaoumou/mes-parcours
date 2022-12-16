const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
let userSchema = new Schema({
  firstName: {
      type: String,
  },
  lastName: {
      type: String,
  } ,
  tel: {
      type: Number, 
  },
  profil: {
      type: String, 
  },
  email: {
      type: String,
      unique: true
  },
  password: {
      type: String
  },
  etat: {
      type: Boolean,
  },
  matricule: {
      type: String,
  },
  dateinscrit: {
      type: Date,
  },
 }, 
{
  collection: 'books'
})

userSchema.plugin(uniqueValidator, { message: 'Email already in use.' });
module.exports = mongoose.model('User', userSchema)
