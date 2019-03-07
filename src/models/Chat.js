const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  createdBy: String,
  name: String,
  messenger: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Messenger'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Chat', ChatSchema);