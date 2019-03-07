const express = require('express');
const routes = express.Router();
const Messenger = require('./controllers/Messenger');

routes.get('/messengers/:id', Messenger.index);
routes.post('/messengers', Messenger.store);
routes.get('/chat', Messenger.chatGet);
routes.post('/chat', Messenger.chat);

module.exports = routes;