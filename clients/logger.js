'use strict';

const socketIOClient = require('socket.io-client');

const constants = require('../utils/constants.js');
const EVENT = require('../utils/events.js');

const socket = socketIOClient.connect(constants.SERVER_URL);

socket.on(EVENT.RECEIVED_EVENT, payload => {
  console.log(payload);
});

socket.on(EVENT.RECEIVE_ERROR, error => {
  console.error(error);
});
