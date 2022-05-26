'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  // order: function (starterindex, mainindex) {
  //   return [this.starterMenu[starterindex], this.mainMenu[mainindex]];
  // },

  // Delivery: function ({ starterindex, mainindex, time, place }) {
  //   console.log(
  //     `your ${this.starterMenu[starterindex]} and ${this.mainMenu[mainindex]} will arrive on ${time} at ${place}`
  //   );
  // },
  orderPizza: function (mainIngredient, ...others) {
    console.log(mainIngredient);
    console.log(others);
  },
};
// const {
//   name: restaurantname,
//   categories: tags,
//   openingHours: hours,
// } = restaurant;
// console.log(restaurantname, tags, hours);

// restaurant.Delivery({
//   time: '20:20',
//   place: 'thimphu',
//   starterindex: 2,
//   mainindex: 2,
// });
//.....................returning values.............................
// let fav = restaurant.categories;
// console.log(fav);

// let [one, , two] = restaurant.categories;
// console.log(one, two);

//......................swaping....................................
// const temp = one;
// one = two;
// two = temp;

// console.log(one, two);

// ....................return 2 values from the function.............

// let [starterMenu, mainMenu] = restaurant.order(2, 0);
// [starterMenu, mainMenu] = [mainMenu, starterMenu];
// console.log(starterMenu, mainMenu);

//......................nested destructering.........................

// const arr = [2, 1, [3, 4]];
// const [i, , [j, k]] = arr;
// console.log(i, j, k);

// const array = [2, 3, 4];
// const [x, y, z] = array;
// console.log(array);
// console.log(x, y, z);

// const {
//   fri: { open, close },
// } = hours;
// console.log(open, close);

//...........end of Destructuring objects..........

//......................spread operator.....................
// const array = [1, 2, 3];
// const newArray = [4, 5, array[0], array[1], array[2]];
// console.log(newArray);

// const badarray = [1, 2, ...array];
// console.log(badarray);

// const newMenu = [...restaurant.mainMenu, 'Gnnoci'];
// console.log(newMenu);

// const menu = [...restaurant.starterMenu, ...newMenu];
// console.log(...menu);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Zakhang';
// console.log(restaurantCopy.name);

//.......................rest pattern and paramenters...........................

//note : spread operator should be on left

const [pizza, , risotto, ...others] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, ...others);

restaurant.orderPizza('mushroom', 'onion', 'chilli', 'pepper');

