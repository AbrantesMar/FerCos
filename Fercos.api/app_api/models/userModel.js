var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String, required: true },
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  cpf: { type: String, required: true, unique: true },
  birthDate: { type: Date },
  motherName: { type: String },
  state: { type: String },
  insertDate: { type: Date },
  changeDate: { type: Date }
});

module.exports = mongoose.model('User', userSchema);
