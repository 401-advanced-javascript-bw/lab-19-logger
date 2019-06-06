'use strict';

const PORT = 3000;
const genericServer = require('socket.io')(PORT);
const EVENT = require('./utils/events.js');

genericServer.on('connection', socket => {
  console.log('(Generic) new socket connected', socket.id);

  socket.on(EVENT.SAVE_EVENT, message => {
    genericServer.broadcast.emit(EVENT.RECEIVED_EVENT, message);
  });
  socket.on(EVENT.ERROR_EVENT, message => {
    genericServer.broadcast.emit(EVENT.RECEIVE_ERROR, message);
  });
});
