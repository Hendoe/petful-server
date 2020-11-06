const express = require('express');
const cors = require('cors');


const app = express();

const CLIENT_ORIGIN = require('../../config');

app.use(cors({
  origin: CLIENT_ORIGIN
}));

app.use('/api/people', require('../people/people.router'));
app.use('/api/pets', require('../pets/pets.router'));

module.exports = app;