const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
//const bodyParser = require("body-parser")

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb://messenger:zeppelin123@ds123625.mlab.com:23625/messenger-test', {
  useNewUrlParser: true
});

app.use((req, res, next) => {
  req.io = io;

  next();
})

app.use(cors());
//app.use(bodyParser.json());
app.use(express.json());
app.use(require('./routes'));

server.listen(3003, () => {
  console.log(":) Server started on port 3003");
});
