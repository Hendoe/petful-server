const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');
const store = require('../../store');

const router = express.Router();

let sampleCat = store.cats[0];
let sampleCatData = store.cats;
let sampleDog = store.dogs[0];
let sampleDogData = store.dogs;

router.get('/', (req, res) => {
  return res.json('welcome to the pet store');
})

router.get('/showcat', (req, res) => {
  console.log('i see i see');
  Pets.get('cat');
});

router.get('/cat', (req, res) => {
  return res.json(sampleCat);
});

router.get('/cats', (req, res) => {
  return res.json(sampleCatData);
});

router.get('/dog', (req, res) => {
  return res.json(sampleDog);
});

router.get('/dogs', (req, res) => {
  return res.json(sampleDogData);
});

router.delete('/dog', (req, res) => {
  Pets.dequeue('dog');
  return res.json(sampleDog);
});

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
})

module.exports = router
