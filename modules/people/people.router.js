const express = require('express');
const json = require('body-parser').json();

const People = require('./people.service');
const store = require('../../store');

const router = express.Router();

let samplePeopleData = store.people;

router.get('/', (req, res) => {
  return res.json('here are all the people');
})

router.get('/people', (req, res) => {
  return res.json(samplePeopleData);
});

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
})

module.exports = router