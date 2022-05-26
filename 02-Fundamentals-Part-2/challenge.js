// 1
/*const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// console.log(calcAverage(3, 4, 5));
let scoreDolhin = calcAverage(44, 23, 71);
let scoreKoala = calcAverage(65, 54, 49);
// console.log(scoreDolhin, scoreKoala);

function checkWinner(avgDolhins, avgKoalas) {
  if (avgDolhins > avgKoalas * 2) {
    console.log(`Dolphin wins ${scoreDolhin}`);
  } else if (avgKoalas > avgDolhins * 2) {
    console.log(`Dolphin wins ${scoreKoala}`);
  } else {
    console.log("no team wins");
  }
}
checkWinner(scoreDolhin, scoreKoala);

scoreDolhin = calcAverage(85, 54, 41);
scoreKoala = calcAverage(23, 27, 34);
checkWinner(scoreDolhin, scoreKoala);*/

// 2
/*
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bill = [125, 555, 444];
const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
const total = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];
console.log(bill, tips, total);
*/
//..................................................
// objects(my answer)
/*
const BMI = {
  johnHeight: "1.69",
  johnWeight: "78",
  johnname: "john smith",
  markHeight: "1.95",
  markWeight: "92",
  markname: "mark miller",
  calcBMI: function () {
    this.cal = this.johnWeight / this.johnHeight ** 2;
    return this.cal;
  },
  calcBMIm: function () {
    this.m = this.markWeight / this.markHeight ** 2;
    return this.m;
  },
};
// BMI.calcBMI();
// console.log(BMI.cal);
console.log(BMI.calcBMIm(), BMI.calcBMIm());
*/

// const name =['mark miller','john smith']

//their answer
/*
const john = {
  Height: "1.69",
  Weight: "78",
  name: "john smith",
  calcBMI: function () {
    this.bmi = this.Weight / this.Height ** 2;
    return this.bmi;
  },
};
const mark = {
  Height: "1.95",
  Weight: "92",
  name: "mark miller",
  calcBMI: function () {
    this.bmi = this.Weight / this.Height ** 2;
    return this.bmi;
  },
};
john.calcBMI();
mark.calcBMI();
if (john.bmi > mark.bmi) {
  console.log(
    `${john.name} BMI ${john.bmi} is higher than ${mark.name} ${mark.bmi}`
  );
} else {
  console.log(
    `${mark.name} BMI ${mark.bmi} is higher than ${john.name} ${john.bmi}`
  );
}
*/

//....chanllenge 4........................................
//iteration
//for loop
/*
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const total = [];
// adding bills array elements
for (let i = 0; i < bills.length; i++) {
  const charge = calcTip(bills[i]);
  tips.push(charge);
  total.push(charge + bills[i]);
}
console.log(bills, tips, total);
// find average
function calAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    //sum = sum +arr[i]
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calAverage([2, 3, 4]));
// average of total
console.log(calAverage(total));
console.log(calAverage(tips));
*/