'use strict';
const QClient = require('@nmq/q/client');

const files = new QClient('files');

files.subscribe('save', payload => {
  console.log('save', payload);
});
files.subscribe('error', payload => {
  console.log('error', payload);
});

const database = new QClient('database');

database.subscribe('delete', payload => {
  console.log('delete', payload);
});
database.subscribe('create', payload => {
  console.log('create', payload);
});
database.subscribe('read', payload => {
  console.log('read', payload);
});
database.subscribe('update', payload => {
  console.log('update', payload);
});
database.subscribe('error', payload => {
  console.log('error', payload);
});
