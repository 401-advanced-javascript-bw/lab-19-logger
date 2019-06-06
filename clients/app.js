'use strict';
const socketIOClient = require('socket.io-client');
const constants = require('../utils/constants.js');
const EVENT = require('../utils/events.js');
const genericSocket = socketIOClient.connect(constants.SERVER_URL);

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const read = file => readFile(file);
const toUppercase = data => Buffer.from(data.toString().toUpperCase());
const write = (file, data) => writeFile(file, data);

const alterFile = file => {
  return read(file)
    .then(data => toUppercase(data))
    .then(data => write(file, data))
    .then(() => genericSocket.emit(EVENT.SAVE_EVENT, 'file saved!'))
    .catch(error => genericSocket.emit(EVENT.ERROR_EVENT, error));
};

let file = process.argv.slice(2).shift();
alterFile(file);
