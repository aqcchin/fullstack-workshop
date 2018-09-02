const express = require('express');
const parser = require('body-parser');
const path = require('path');
const PORT = 3000;
const router = require('./routes.js')

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use('/api', router);

app.use(express.static(path.resolve(__dirname, '../static')));

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});
