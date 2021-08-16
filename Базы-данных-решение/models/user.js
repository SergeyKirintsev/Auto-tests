const mongoose = require('mongoose');
const isEmail = require('validator/lib/isEmail');
const isURL = require('validator/lib/isURL');

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: 'email не может быть пустым',
    unique: true,
    validate: {
      validator: (v) => isEmail(v),
      message: 'Неправильный формат почты',
    },
  },
  password: {
    type: String,
    required: 'password не может быть пустым',
    select: false,
  },
  name: {
    type: String,
    required: 'name не может быть пустым',
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: 'about не может быть пустым',
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    validate: {
      validator: (v) => isURL(v),
      message: 'avatar должен быть ссылкой',
    },
  },
}, { versionKey: false });

module.exports = mongoose.model('user', userSchema);
