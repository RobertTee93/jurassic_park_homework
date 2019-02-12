const Park = function(name, ticketPrice, dinosaurs){
  this.name = name
  this.ticketPrice = ticketPrice
  this.dinosaurs = dinosaurs
}

Park.prototype.countDinosaurs = function(){
  return this.dinosaurs.length;
};

Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur){
  const index = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(index, 1);
};

Park.prototype.mostPopularDino = function(){
    let sortedDinosaurs = this.dinosaurs.sort(function(a, b){
     return b.guestsAttractedPerDay - a.guestsAttractedPerDay;
  })
  return sortedDinosaurs[0];
};

Park.prototype.findBySpecies = function(species){
  let foundDinos = [];
  for (dinosaur of this.dinosaurs){
    if (dinosaur.species === species){
      foundDinos.push(dinosaur);
    }
  }
  return foundDinos
};

Park.prototype.dailyVisits = function(){
  let total = 0
  for (dinosaur of this.dinosaurs){
    total += dinosaur.guestsAttractedPerDay
  }
  return total
};

Park.prototype.yearlyVisits = function(){
  return this.dailyVisits() * 365
}

Park.prototype.yearlyTicketRevenue = function(){
  return this.yearlyVisits() * 35
};

Park.prototype.removeAllBySpecies = function(species){
   let foundDinos = this.findBySpecies(species);
   for (dinosaur of foundDinos){
     this.removeDinosaur(dinosaur);
   };
}

Park.prototype.countDietType = function(){
  const allDietTypes = {'carnivore': 0, 'herbivore': 0}
  const dietTypesArray = Object.keys(allDietTypes)
  for (let dinosaur of this.dinosaurs){
    if (dietTypesArray.includes(dinosaur.diet)){
      allDietTypes[dinosaur.diet] += 1
    }
  }
  return allDietTypes
};


module.exports = Park
