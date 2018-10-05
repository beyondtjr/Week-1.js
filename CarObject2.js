// Car Object Challenges
// Create out object with a variable
// Creat a function that creates an object that represents a car .
//

// Working Model
// var cars = {
//   year: "2005",
//   make: "Honda" ,
//   color: "green",
//   speed: "25",
//   getData: function(){ return this.make+"-"+this.year+"-"+ this.color+" " + this.speed + "mph"
//   }
// };
//
// console.log(cars.getData());



//Test Case

var cars = {
  year: "2005",
  make: "Honda" ,
  color: "green",
  speed: 25,
  getData: function() { return this.make + "-" + this.year + "-" + this.color + " "+ this.speed + "mph";
  },
  getSpeed: function() { return this.speed;
  },
  getAccel: function() { this.speed = this.speed + 10;
  },
  getBrake: function() {this.speed = this.speed -7;
  }
};

console.log(cars.getData());
