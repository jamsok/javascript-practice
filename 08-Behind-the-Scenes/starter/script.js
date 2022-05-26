'use strict';
//..............scoping.............
function CalAge(birthyear) {
  const age = 2022 - birthyear;
  //   console.log(age);
  //   console.log(firstName);
  function PrintAge() {
    const output = `you are born on ${birthyear} and ${age} years old`;
    console.log(output);
  }
  PrintAge();

  return age;
}
const firstName = 'sonam';
CalAge(1997);

//...........this keyword............
const choden = {
  sex: 'female',
  birthyear: '1998',

  Calc: function () {
    console.log(2022 - this.birthyear);
    // return 2022 - this.birthyear;
  },
};
choden.Calc();

const jams = {
  birthyear: '1997',
};
jams.Calc = choden.Calc;
jams.Calc();

const str = 'soanm';
for (let i = str.length - 1; i >= 0; i--) {
  //   document.write(str[i]);
  console.log(str[i]);
}
