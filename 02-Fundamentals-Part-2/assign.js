// 1

/*
function describeCountry(country, population, capital) {
  return `${country} has ${population} people and its
  capital city is ${capital}`;
}
const desFinland = describeCountry("Finland", "6 million", "helsinki");
const desBhutan = describeCountry("Bhutan", "7 lakh", "thimphu");
const desIndia = describeCountry("India", "2 billion", "Mumbai");

// const place = console.log(describeCountry("Finland", "6 million", "helsinki"));
// const place1 = console.log(describeCountry("Bhutan", "6 lakh", "thimphu"));
// const place2 = console.log(describeCountry("India", "2 billion", "Mumbai"));
console.log(desFinland, desBhutan, desIndia);
*/

// function declaration
/*
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const china = percentageOfWorld1(1441);
const india = percentageOfWorld1(2000);
const bhutan = percentageOfWorld1(0.007);

console.log(china, india, bhutan);
*/

// function expression
/*
const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
};
const china = percentageOfWorld1(1441);
const india = percentageOfWorld1(2000);
const bhutan = percentageOfWorld1(0.007);
console.log(china, india, bhutan);
*/

// 2

//  arrow declaration
/*
const percentageOfWorld1 = (population) => (population / 7900) * 100;
const china = percentageOfWorld1(1441);
const india = percentageOfWorld1(1234);
const bhutan = percentageOfWorld1(0.007);

console.log(china, india, bhutan);
*/

//3
//function calling other function
/*
const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
};

function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  const cp = `${country} has ${population} million people,
    which is about ${percentage}% of the world.`;
  console.log(cp);
}
describePopulation("china", 1441);
describePopulation("india", 2000);
describePopulation("bhutan", 0.007);*/

// 4

// Array.................................
/*function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
// const china = percentageOfWorld1(1441);
// const india = percentageOfWorld1(2000);
// const bhutan = percentageOfWorld1(0.007);
// const nepal = percentageOfWorld1(0.127);

// console.log(china, india, bhutan);

const populations = [1441, 2000, 0.007, 0.127];
console.log(populations.length === 4);
const percentage = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentage);
*/

//objects................................

/*
// intro 1
const myCountry = {
  country: "Bhutan",
  capital: "thimphu",
  language: "Dzongkha",
  population: 700000,
  neighbours: ["india", "nepal", "china"],
  CheckIsland: true,

  // Obj Method 1
  describe: function () {
    this.dis = `${this.country} has ${this.population} ${
      this.language
    }-speaking people, ${this.neighbours.length} neighbouring countries
    and a capital called ${this.capital} ${
      this.neighbours.length === 0 ? "is an" : "not an"
    }island`;
    return this.dis;
  },

  //Obj Method 3
  CheckIsland: function () {
    const isIsland = `${this.neighbours.length === 0 ? "true" : "false"}`;
    return isIsland;
  },
};

// dot vs brackets notation 1
// console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries
// and a capital called ${myCountry.capital}`);

// Obj Method 2
console.log(myCountry.describe());
console.log(myCountry.CheckIsland());

// dot vs brackets notation 2
// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry["population"] -= 2;
// console.log(myCountry.population);
*/

//iteration for loop................................

//1

/*
for (let i = 1; i < 51; i++) {
  console.log(` Voter number ${i} is currently voting`);
}
*/

//2 looping arrays, breaking and continuing
/*
let percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
};
let populations = [1441, 2000, 0.007, 0.127];
// console.log(populations.length === 4);
// let percentage = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];
// console.log(percentage);
let population2 = [];
for (let i = 0; i < populations.length; i++) {
  const pcr = percentageOfWorld1(populations[i]);
  population2.push(pcr);
}
console.log(population2);
*/

// Looping Backwards and Loops in Loops
/*
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`neighbours:${listOfNeighbours[i][j]}`);
  }
}
*/

// while loop
/*
let percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
};
let populations = [1441, 2000, 0.007, 0.127];
let percentage3 = [];
let i = 0;
while (i < populations.length) {
  const prc = percentageOfWorld1(populations[i]);
  percentage3.push(prc);
  i++;
}
console.log(percentage3);

*/
