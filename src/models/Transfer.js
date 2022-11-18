const { Schema, model } = require('mongoose');

const transferSchema = new Schema({
  accountNumber: {
    type: String,
    required: true,
    trim: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  destinationBank: {
    type: Object,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  rut: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  userId: {
    type: String,
    required: true
  }
});

module.exports = model('transfer', transferSchema);
