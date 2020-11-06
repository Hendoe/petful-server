const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

module.exports = {
  get(type) {
    if (type ==='cat') {
      return pets;
    } else {
      console.log('aaaahhhhh')
    };
  },

  dequeue(type) {
    if (type === 'cat') {
      Queue.dequeue('cat');
    } else if (type === 'dog') {
      Queue.dequeue('dog');
    };
  }
};