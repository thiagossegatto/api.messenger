const Messenger = require('../models/Messenger');
const Chat = require('../models/Chat');

module.exports = {
  async index(req, res){
    const messenger = await Messenger.find({chat: req.params.id}).sort('createdAt');

    return res.json(messenger);
  },
  async chatGet(req, res){
    const chats = await Chat.find().populate('messages').sort('createdAt');

    return res.json(chats);
  },
  async store(req, res){
    const messenger = await Messenger.create(req.body);
    if(req.body.chat == messenger.chat){
      req.io.emit('messengers', messenger);
    }
    return res.json(messenger);
  },
  async chat(req, res){
    const chat = await Chat.create(req.body);
    
    req.io.emit('chat', chat);
    return res.json(chat);
  }
}