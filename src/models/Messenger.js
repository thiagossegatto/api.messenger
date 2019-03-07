const mongoose = require('mongoose');

const MessengerSchema = new mongoose.Schema({
  author: String,
  content: String,
  chat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chat'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Messenger', MessengerSchema);