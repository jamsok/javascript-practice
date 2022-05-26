// functions
/*function age(sonam, choden) {
  const elder = `sonam with ${sonam} and choden with ${choden}`;
  return elder;
}
// const Ages = age(20, 23);
// console.log(Ages);

console.log(age(20, 23));*/

// functions declarations
/*function uage(year) {
  return 2022 - year;
}
const age1 = uage(1997);
// function expressions
const uage1 = function (year) {
  return 2022 - year;
};
const age2 = uage(1998);
console.log(age1, age2);*/

// Arrow function
/*const uage2 = (year) => 2022 - year;
const age = uage2(1997);
console.log(age);*/
// function expressions
/*const uage1 = function (year) {
  return 2022 - year;
};
const age2 = uage1(1998);
console.log(age2);*/

// function calling another functions
/*const people = function (number) {
  return number * 2;
};

function person(kg, cm) {
  const kgdetails = people(kg);
  const cmdetails = people(cm);
  const detail = `i am ${kgdetails} kg and ${cmdetails} tall`;
  return detail;
}
const person1 = person(65, 187);
console.log(person1);*/

/*const age2 = function (lo) {
  return lo * 2;
};
function age(month, year) {
  const lomonth = age2(month);
  const loyear = age2(year);
  const old = `i am born on month of ${lomonth}th and year ${loyear} `;
  return old;
}
const age1 = age(10, 1997);
console.log(age1);*/

//arrays............................................

const friends = ["soanm", "choden", "jamso"];
console.log(friends);
console.log(friends[1]);

const number = new Array(200, 300, 400, 500.6);
console.log(number[number.length - 1]);
number[2] = "sam";
console.log(number);

/*function age(year) {
  return 2022 - year;
}
// console.log(age(1997));
const number = new Array(200, 300, 1997, 500.6);

const age1 = age(number[2]);
console.log(age1);*/

// const friends = ["jams", "sam", "dorji"];
// friends.push("jay");
// console.log(friends);
// const newlenght = friends.push("jay");
// console.log(newlenght);

// friends.unshift("john");
// console.log(friends);

// friends.shift();
// console.log(friends);

// function myFunction(a, n) {
//   return a.charAt(n);
// }
// console.log(myFunction("abc", 0));

// function myFunction(a) {
//   if (a.length % 2 === 0) {
//     return a.slice(0, a.length / 2);
//   }
//   return a;
// }
// console.log(myFunction("jamtso"));

// document.querySelector("h1").addEventListener("click", function () {
//   alert("hello");
// });

// let myhtml = document.querySelector("h1");
// myhtml.addEventListener("click", function () {
//   // console.log("hello");
//   alert("hello");
// });
/*
let myhtml = document.querySelector("h1");
myhtml.addEventListener("click", () => {
  // console.log("hello");
  alert("hello");
});
*/

//objects...............................................
/*const me = {
  FirstName: "sonam",
  LastName: "Jamso",
  age: "24",
  form: "mongar",
};
console.log(me.FirstName);

const you = "Name";
console.log(me["First" + you]);
console.log(me["Last" + you]);

const interest = prompt("what you like to know about me");
if (me[interest]) {
  console.log(me[interest]);
} else {
  console.log("sorry! wrong input.what you like to know about me");
}*/

//object methods.........................................
/*
const myAuto = {
  name: "sonam",
  gender: "male",
  birthyear: "1997",
  
  // calAge: function (birthyear) {
    //   return 2022 - birthyear;
    // },
    calAge: function () {
      console.log(this);
      return 2022 - this.birthyear;
    },
  };
  console.log(myAuto.calAge());
  // console.log(myAuto["calAge"](2000));
  */

/*
const myAuto = {
  name: "sonam",
  gender: "male",
  birthyear: "1997",
  hasDiverslicence: true,

  // calAge: function (birthyear) {
  //   return 2022 - birthyear;
  // },
  calAge: function () {
    // console.log(this);
    this.age = 2022 - this.birthyear;
    return this.age;
  },
  getSum: function () {
    return `${myAuto.name} is a ${myAuto.calAge()} years old and ${
      myAuto.hasDiverslicence ? "has" : "has no"
    } Diverslicence`;
  },
};
console.log(myAuto.calAge());
console.log(myAuto.age);
console.log(myAuto.getSum());
*/

// let myButton = document.querySelector("button");
// myButton.addEventListener("click", function () {
//   console.log(this.id);
// });

//.....................................................
//iteration for loop

/*for (let i = 1; i <= 10; i++) {
  console.log(`hello${i}😄`);
}*/

/*
const type = [];
const me = ["sonam", true, "jams", 20, ["fly", "flew", "flown"]];

for (let i = 0; i < me.length; i++) {
  //reading type array
  console.log(me[i], typeof me[i]);
  //filliing type array
  // type[i] = typeof me[i];
  type.push(typeof me[i]);
}
console.log(type);
*/

/*
const num = [1991, 1992, 1993, 1994, 1995, 1996];
const count = [];
for (let i = 0; i < num.length; i++) {
  count.push(2022 - num[i]);
}
console.log(count);
*/

//continue and break
/*
const me = ["sonam", true, "jams", 20, ["fly", "flew", "flown"]];

for (let i = 0; i < me.length; i++) {
  if (typeof me[i] === "string") continue;
  console.log(me[i]);
}
// console.log(me[i], typeof me[i]);
*/
//break
/*
const me = ["sonam", true, "jams", 20, ["fly", "flew", "flown"]];

for (let i = 0; i < me.length; i++) {
  if (typeof me[i] == "number") break;
  console.log(me[i]);
}
*/

//looping backward
/*
const hello = "sonam";
for (let i = hello.length - 1; i >= 0; i--) {
  console.log(i, hello[i]);
}
*/

//loop inside loop
/*
for (let i = 1; i < 5; i++) {
  console.log("i, hello");

  for (let j = 1; j < 5; j++) {
    console.log(j, "* ");
  }
}
*/
// for (let j = 1; j < 6; j++) {
//   console.log(j, "**");
// }

// for (let i = 1; i <= 4; i++) {
//   console.log("* ".repeat(i));
// }

//while loop
/*
let n = 1;
while (n < 11) {
  console.log(n, "while loop");
  n++;
}
*/

/*
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`you rolled ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("loop completed");
}
*/
