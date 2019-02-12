const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park
  let dinosaur1
  let dinosaur2
  let dinosaur3
  let dinosaur4

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50)
    dinosaur2 = new Dinosaur('velociraptor', 'carnivore', 150)
    dinosaur3 = new Dinosaur('brontosaurus', 'herbivore', 35)
    dinosaur4 = new Dinosaur('pterodactyl', 'carnivore', 35)
    let dinosaurs = [dinosaur1, dinosaur2, dinosaur3]
    park = new Park("Jurassic Park", 35, dinosaurs)
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 35);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.countDinosaurs();
    assert.strictEqual(actual, 3);
  });

  it('should be able to add a dinosaur to its collection', function(){
    let dinosaur4 = new Dinosaur('pterodactyl', 'carnivore', 35)
    park.addDinosaur(dinosaur4);
    actual = park.countDinosaurs();
    assert.strictEqual(actual, 4);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(dinosaur2);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur3]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park.mostPopularDino();
    assert.strictEqual(actual, dinosaur2);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    const actual = park.findBySpecies("velociraptor")
    assert.deepStrictEqual(actual, [dinosaur2]);
  });

  it('should be able to calculate total visitors per day', function(){
    const actual = park.dailyVisits();
    assert.strictEqual(actual, 235);
  })

  it('should be able to calculate total visits per year', function(){
    const actual = park.yearlyVisits();
    assert.strictEqual(actual, 85775);
  })

  it('should be able to calculate total revenue of ticket sales', function(){
    const actual = park.yearlyTicketRevenue();
    assert.strictEqual(actual, 3002125);
  })

  it('should be able to remove all dinosaurs of a particular species', function(){
    const dinosaur5 = new Dinosaur('velociraptor', 'carnivore', 50);
    park.addDinosaur(dinosaur5)
    park.removeAllBySpecies("velociraptor")
    const actual = park.countDinosaurs()
    assert.strictEqual(actual, 2)
  });

  it('should be able to count number of each diet type', function(){
    const actual = park.countDietType()
    const expected = {'carnivore': 2, 'herbivore': 1}
    assert.deepStrictEqual(actual, expected)
  })

});
