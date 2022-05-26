// 1
const heightjohn = 1.95;
const johnmass = 92;
const heightmark = 1.69;
const markmass = 78;

const johnBMI = johnmass / heightjohn ** 2;
const BMI = markmass / (heightmark * heightmark);
console.log(johnBMI, BMI);

// 2
if (johnBMI < BMI) {
  console.log(`Mark's BMI is higher than John's ${BMI}`);
} else {
  console.log(`John's BMI is higher than Mark's! ${johnBMI}`);
}

// 3
const Dolphine = (97 + 101 + 112) / 3;
const Koalas = (109 + 95 + 123) / 3;

if (Dolphine < Koalas && Koalas >= 100) {
  console.log("koalas wins");
} else if (Koalas < Dolphine && Dolphine >= 100) {
  console.log("Dolphine wins");
} else if (Dolphine >= 100 && Koalas >= 100) {
  console.log("both wins");
} else {
  console.log("both losses");
}
console.log(`${Dolphine}Dolphine ,${Koalas} Koalas`);

// 4
const bills = 275;
// const tips = 0.15;
// if (bill >= 50 && bill <= 300) {
//   const value = bill * tips;
//   console.log(value);
// } else {
//   console.log(bill * 0.2);
// }

const tips = bills <= 300 && bills >= 50 ? bills * 0.15 : bills * 0.2;
const total = bills + tips;
console.log(
  `“The bill was ${bills}, the tip was ${tips}, and the total value ${total}`
);
