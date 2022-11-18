const { Schema, model } = require('mongoose');

const accountSchema = new Schema({
  availableBalance: {
    type: Number,
    default: 5000000
  },
  userId: {
    type: String,
    required: true
  }
});

module.exports = model('Account', accountSchema);
