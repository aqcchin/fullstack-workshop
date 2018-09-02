const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todoList');

const db = mongoose.connection;

// db.on('error', console.log.bind(console, 'Error in connection!');
db.on('error', () => console.log('Error in connection!'));
db.once('open', () => {
  console.log('Successfully connected to the database')
});

module.exports = db;