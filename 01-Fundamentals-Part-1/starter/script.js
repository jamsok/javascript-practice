// // one
// let js = "hello";
// if (js === "hello") alert("learn to start!");
// console.log(20 + 4 + 3);

// // two
// let sonamPhuntsho = true;
// console.log(sonamPhuntsho);
// console.log(typeof sonamPhuntsho);

// // three
// const firstName = "sonam";
// const birthYear = 1997;
// const newJob = "teacher";
// const year = 2021;

// const newName = `i'm ${firstName}, a ${year - birthYear} year ${newJob}`;
// console.log(newName + "🤣");
// console.log("i am sonam😘");
// console.log(`i am 23 years old`);

// // four
// let n = "1" + 1;
// n -= 2;
// console.log(n);

// let m = "1" + "1";
// m -= 1;
// console.log(m);
// console.log("3" == 3);
// const old = 24;
// console.log("i am " + old);
// console.log("i am 24");
// console.log(`24 + 28`);
// console.log(`i am
//  two
//  five
//  year
//  old`);

// let sp = "1" + 1;
// sp *= 2;
// console.log(sp);
// //  five
// console.log(window.b);
// let a = "hello"; // globally scoped
// var b = "world"; // globally scoped
// console.log(window.a); // undefined
// console.log(window.b);
// // prac
// ("use strict");

// let sonamCdon = false;
// const testPass = true;
// if (testPass) sonamCdon = true;
// if (sonamCdon) console.log("success");
// //dddddddd
// function sonamCdn() {
//   console.log("i love sonam jamso");
// }
// sonamCdn();
// //ddddddddddd
// function sonamJamso(sonam, jamtso) {
//   const choden = `i love ${sonam}sonam ${jamtso}jamtso`;
//   return choden;
// }
// // const lover = sonamJamso('','');
// // console.log(lover);
// console.log(sonamJamso("", ""));

// const ojtCompletion = (joinYear, name) => {
//   const year = 2021 - joinYear;
//   const completeOjt = 2022 - year;
//   return `my ojt completes on ${completeOjt} and i am ${name}`;
// };
// console.log(ojtCompletion(2021, "sonam"));
// console.log(ojtCompletion(2020, "jamsok"));
// // prac
// const ojtC = function (joinDate, year) {
//   const endOjt = 2021 - joinDate;
//   const endterm = 2022 - endOjt;
//   return `i served in ojt for ${endOjt} years and my ojt completes on ${year}`;
//   // return`i joined ojt on year ${endterm}  and my ojt completes on ${year}`;
// };
// const final = ojtC(2021, 2021);
// console.log(final);
// console.log(ojtC(2002, 2021));

// // prac
// const sweets = function (Chocolate) {
//   return Chocolate * 4;
// };
// const sweetPartition = function (dairyMilk, kitkat) {
//   const milky = sweets(dairyMilk);
//   const kitty = sweets(kitkat);
//   const candy = `i  have ${milky} partition of dairymilk and ${kitty} partition of kitkat`;
//   return candy;
// };
// console.log(sweetPartition(2, 3));

// // calling other function
// const calAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// console.log(calAverage(2, 3, 4));
// let scoredolphine = calAverage(44, 23, 71);
// let scoreKoalas = calAverage(65, 54, 49);
// console.log(scoredolphine, scoreKoalas);

// const checkWinner = function (dolphineAvg, koalasAvg) {
//   if (dolphineAvg >= 2 * koalasAvg) {
//     console.log(`Dolphine wins (${dolphineAvg} vs. ${koalasAvg})`);
//   } else if (koalasAvg >= 2 * dolphineAvg) {
//     console.log(`koalas wins (${koalasAvg} vs. ${dolphineAvg})`);
//   } else {
//     console.log(`no team wins`);
//   }
// };
// checkWinner(scoredolphine, scoreKoalas);

// checkWinner(444, 222);

// scoredolphine = calAverage(85, 54, 41);
// scoreKoalas = calAverage(23, 34, 27);
// console.log(scoredolphine, scoreKoalas);
// checkWinner(scoredolphine, scoreKoalas);

// const calsTips = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const bills = [200, 50, 150];
// const tips = [calsTips(bills[0]), calsTips(bills[1]), calsTips(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, total);

// console.log("sonam choden is talkative");
// console.log("sonam choden is talkative");
// console.log("sonam choden is talkative");

// let i = 2;
// for (i = 3; i <= 10; i++) {
//   console.log(`sonam is talkactive ${i}`);
// }
// ...............array looping
// const sonam = [
//   "jamstsho",
//   "phuntsho",
//   2021 - 1997,
//   true,
//   ["hello", "morning", "whatsUP"],
// ];
// const array = [];
// for (let i = 0; i < sonam.length; i++) {
//   console.log(sonam[i], typeof sonam[i]);
//   array.push(typeof sonam[i]);
//   array[i] = typeof sonam[i];
// }
// console.log(array);

//................. practice
// const years = [1997, 1998, 1999, 2000];
// const age = [];
// for (let i = 0; i < years.length; i++) {
//   age.push(2021 - years[i]);
// }
// console.log(age);

//................continue and break................
// console.log("---string---");
// const sam = [
//   "jamstsho",
//   "phuntsho",
//   2021 - 1997,
//   true,
//   2000,
//   ["hello", "morning", "whatsUP"],
// ];
// for (let i = 0; i < sam.length; i++) {
//   if (typeof sam[i] !== "string") continue;
//   console.log(sam[i], typeof sam[i]);
// }
//break
// console.log("break");
// for (let i = 0; i < sam.length; i++) {
//   if (typeof sam[i] === "number") break;
//   console.log(sam[i], typeof sam[i]);
// }

// .............back looping.................

// for (let i = sam.length - 1; i >= 0; i--) {
//   if (typeof sam[i] !== "string") continue;
//   console.log(i, sam[i], typeof sonam[i]);
// }

//.............. loop inside loop................

// for (let i = 0; i < 4; i++) {
//   console.log(`* ${i}`);
//   for (let j = i; j < 6; j++) {
//     console.log(`${i}*** ${j}`);
//   }
// }

// let lol = 2;
// while (lol <= 3) {
//   console.log(`i do like programming ${lol}`);
//   lol++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// const x = 23;

// ("use strict");

// const temperature = [3, -2, -6, -1, "error", 4, 13, 17, 15, 14, 9, 5];
// const calcApt = function (ara) {
//   let max = ara[0];
//   let min = ara[0];
//   for (let i = 0; i < ara.length; i++) {
//     const cTemp = ara[i];
//     if (typeof cTemp !== "number") continue;
//     if (cTemp[i] > max) max = cTemp[i];
//     if (cTemp[i] < min) min = cTemp[i];
//   }
//   console.log(`max temp is ${max}, min temp ${min}`);
//   return max - min;
// };
// const amplitute = calcApt(temperature);
// console.log(`amp is ${amplitute}`);

// let num = 2;
// let evenOdd = 0;
// if ((num = num / 2 === 0)) {
//   console.log(`its even ${evenOdd}`);
// } else {
//   console.log(`it odd ${evenOdd}`);
// }

//............javascript basics..............

// let ran = Math.trunc(Math.random() * 20);
// console.log(ran);

// .............whole number check...................

// function myFunction(a) {
//   if (a - Math.floor(a) !== 0) {
//     console.log(false);
//   } else {
//     console.log(true);
//   }
// }
// myFunction(24.34);

// function myFunction(a) {
//   my_String = ' ' + a;
//   // console.log(typeof my_String);
//   count = 0;
//   for (let i = 0; i < my_String.length; i++) {
//     if (my_String[i] === '.') {
//       count += 1;
//     }
//   }
//   if (count) {
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(myFunction(23));

//..............get the nth element..............
/*
function myFunction(a, n) {
  for (let i = 0; i < a.length; i++) {
    if (n <= a.length) {
      return a[n - 1];
    }
  }
}
console.log(myFunction([1, 2, 3, 4, 5], 3));
console.log(myFunction([10, 9, 8, 7, 6], 5));
console.log(myFunction([7, 2, 1, 6, 3], 1));
*/

/*
// function myFunction(a, n) {
//   while (n <= a.length) {
//     return a[n - 1];
//     n++;
//   }
// }
// console.log(myFunction([1, 2, 3, 4, 5], 3));
*/

// ............Sort an array of strings alphabetically........

// function myFunction(arr) {
//   //   mystr = ' ' + arr;
//   //   //   console.log(typeof mystr);
//   //   count = [];
//   for (let i = 0; i <= arr.length; i++) {
//     const ym = arr.sort();
//     // console.log(typeof ym);
//     return ym;
//   }
// }

// console.log(myFunction(['b', 'c', 'd', 'a']));
// console.log(myFunction(['z', 'c', 'd', 'a', 'y', 'a', 'w']));

/*
//..................percentage finding.............
function myFunction(a, b) {
  return (a / 100) * b;
}
console.log(myFunction(100, 50));
*/

//..............How many times does a character occur?..............
/*
function myFunction(a, b) {
  let res = 0;
  // console.log(res);
  for (let i = 0; i < b.length; i++) {
    if (b.charAt(i) == a) {
      res++;
    }
  }
  return res;
}
console.log(
  myFunction('m', 'how many times does the character occur in this sentence?')
  );
  */
//.................Check if value is present in Set.................
/*
function myFunction(set, val) {
  return set.has(val);
}
console.log(myFunction(new Set([1, 2, 3]), 2));
*/

//try in process..................
/*
 function myFunction(arr, n) {
   for (let i = 0; i < arr.length; i++) {
     for (j = 0; (j = i); j++) {
       if(arr.length<n){
 
       }
     }
   }
 }
 */

//................Check whether a string contains another string and concatenate.................

// function myFunction(a, b) {
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//       console.log(a.indexOf(b));
//       if ((a.length && b.length) !== 1) {
//         return a + b;
//       } else if ((a.length && b.length) == 1) {
//         return b + a;
//       }
//     }
//   }
// }

// // or
// // return a.indexOf(b) === -1 ? a + b : b + a

// console.log(myFunction('cheese', 'cake'));

//..................Party of Couples....................

// let res = '';
// function myFunction(arr, n) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.length == n) {
//       res ^= arr[i];
//     }
//   }
//   return res;
// }
// console.log(myFunction([1, 2, 3, 2, 1]), 5);

//...............Binary Search................

//..............Round a number to 2 decimal places..........

// function myFunction(a) {
//   return Math.round(a * 10) / 100; //.Math.trunc(num / 100);
// }
// console.log(myFunction(2.99397));

// let snumber = Math.trunc(Math.random() * 20) + 1;
// console.log(snumber);

//................longest words...............
/*
function myFunction(str) {
  let temp = str.split(' ');
  // console.log(temp);
  let max = [''];
  let size = 0;
  for (let i = 0; i < temp.length; i++) {
    if (temp[i].length >= size) {
      size = temp[i].length;
      // console.log(size);
      if (max[max.length - 1].length < temp[i].length) {
        max = [];
        max.push(temp[i]);
      } else {
        max = [...max, temp[i]];
      }
      // console.log(max[max.length - 1].length);
      // console.log(temp[i].length);
    }
  }
  return [...max];
}
console.log(myFunction('i love to cook on holidays chickens'));
*/

//.......................arthematic, geomatric and no pattern.........
/*
function myFunction(a) {
  let arth = new Set();
  // console.log(arth);
  let geo = new Set();
  for (let i = 1; i < a.length; i++) {
    // console.log(a);
    let num1 = a[i] - a[i - 1];
    arth.add(num1);
    let num2 = a[i] / a[i - 1];
    geo.add(num2);
  }
  if (arth.size == 1) {
    console.log(`its arthematic: ${a}`);
  } else if (geo.size == 1) {
    console.log(`its geomatric : ${a}`);
  } else {
    console.log('no pattern');
  }
}
myFunction([4, 8, 16, 32, 64]);
*/
//....................IN PROCESS WITH ARRAY.................

// function myFunction(a) {
//   let arth = [];
//   let geo = [];
//   for (let i = 1; i < a.length; i++) {
//     // console.log(a);
//     let num1 = a[i] - a[i - 1];
//     // console.log(num1);
//     arth.push(num1);
//     let num2 = a[i] / a[i - 1];
//     geo.push(num2);
//   }
//   for (let j = 0; j < arth.length; j++) {
//     if (arth[j] - arth[j - 1] == 0) {
//       console.log(`its arthematic: ${a}`);
//     }
//   }
//   for (let k = 0; k < geo.length; k++) {
//     if (geo[k] / geo[k] == 1) {
//       console.log(`its geomatric : ${a}`);
//     } else {
//       console.log('no pattern');
//     }
//   }
// }
// myFunction([2, 4, 1, 6, 8, 2]);
// myFunction([4, 8, 16, 32, 64]);
// myFunction([2, 4, 6, 8, 10]);
// let numberStore = [0, 1, 2];
// let newNumber = 12;
// console.log((numberStore = [...numberStore, newNumber]));

//.............................First Letter to UpperCase......................
//.ONE WAY....with loop , split(), charAt(), slice(), and join()..............

// function myFunction(a) {
//   let alpha = a.split(' ');
//   for (let i = 0; i < alpha.length; i++) {
//     alpha[i] = alpha[i].charAt(0).toUpperCase() + alpha[i].slice(1);
//   }
//   // return alpha.toUpperCase();
//   // let all = alpha.join('');
//   // return all;
//   return alpha.join('');
// }
// console.log(myFunction('sonam jama love you'));

// ...other with map function, split(),slice(), and join().....
/*
function myFunction(a) {
  let temp = a.split(' ').map(b => {
    let first = b.slice(0, 1).toUpperCase();
    let second = b.slice(1);
    return `${first}${second}`;
    // first = first.toUpperCase();
  });
  return temp.join(' ');
}
console.log(myFunction('sonam jama love you'));
*/

// ........................Unique String........................
//for of loop
/*
function myFunction(str) {
  let temp = [];
  for (let i of str) {
    // console.log(temp.indexOf(str));
    if (temp.indexOf(i) !== -1) {
      return false;
    }
    temp.push(i);
  }
  return true;
}
console.log(myFunction('abcda'));
console.log(myFunction('abcdefgh'));
*/

//.........above problem........ for loop lastIndexOf().................

// const myFunction = function (str) {
//   for (let i = 0; i < str.length; i++) {
//     // console.log(str.lastIndexOf(str[i]));
//     // console.log(i);
//     if (str.lastIndexOf(str[i]) !== i) {
//       return false;
//     }
//     return true;
//   }
// };
// console.log(myFunction('abcds'));
// console.log(myFunction('abcda'));\

//..................... sum of array is ==max in array..................

// const myfunction = function (str) {
//   let temp = str.sort((a, b) => {
//     return a - b;
//   });
//   let greatest = temp.pop();
//   let number = 0;
//   temp.forEach(element => (number += element));
//   return greatest === number;
// };
// console.log(myfunction([2, 1, 3, 7]));

//..........................square every digit of a number and concatenate them.............

// function myFunction(num) {
//   let temp = (num + '').split('');
//   // let res = new set();
//   let ex = [];
//   for (let i = 0; i < temp.length; i++) {
//     if (ex.length <= i) {
//       let res = temp[i] * temp[i];
//       ex.push(res);
//     }
//   }
//   return ex.join('');
// }
// console.log(myFunction(2112));

//...............reverse string.....................
/*
function myFunction(hello) {
  for (let i = hello.length - 1; i >= 0; i--) {
    console.log(hello[i]);
  }
}
myFunction('soanm');
*/

//.......................Duplicate Encoder.........

// function myfunction(word) {
//   let temp = '';
//   word = word.toLowerCase();
//   for (let i = 0; i < word.length; i++) {
//     if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
//       console.log(word.lastIndexOf(word[i]));
//       // console.log(word.indexOf(word[i]));
//       temp += ')';
//     } else {
//       temp += '(';
//     }
//   }
//   return temp;
// }
// console.log(myfunction('Success'));

//...........fibonacci series............

// function myFunction(n) {
//   const num = [0, 1];
//   console.log(num);
//   for (let i = 2; i < n; i++) {
//     num.push(num[i - 2] + num[i - 1]);
//     console.log(num[i]);
//   }
//   return num;
// }
// console.log(myFunction(8));

//...........tribonacci series.............
// function tribonacci(n) {
//   num = [0, 0, 1];
//   // num = temp;
//   // const num = temp;
//   for (let i = 3; i < n; i++) {
//     num.push(num[i - 3] + num[i - 2] + num[i - 1]);
//     // temp = num;
//   }
//   return num;
// }
// console.log(tribonacci(10));

//..............................selise prep up............................
// let char = 256;
// function canbePalindrome(str) {
//   let count = Array(char).fill(0);

//   for (let i = 0; i < str.length; i++)
//   count[str[i].charCodeAt()]++;

//   let odd = 0;
//   for (let i = 0; i < char; i++) {
//     if ((count[i] & 1) == 1) {
//       odd++;
//     }
//   }

//   if (odd > 1) {
//     console.log(' cannot be palindrom');
//   } else {
//     console.log('can be palindrom');
//   }
// }
// canbePalindrome('mmo');
// canbePalindrome('trfgw ');
// canbePalindrome('level');
// canbePalindrome('acecrar');
// canbePalindrome('table');
//....................................................................
// function chechInt(string) {
//   let sum = 0;
//   let temp = string.match(/[\d.]+/g);
//   for (var i = 0; i < temp.length; i++) {
//     sum += Number(temp[i]);
//   }
//   console.log(sum);
// }
// chechInt('Doughnuts, 4; doughnuts holes, 0.08; glue, 3.4');
// chechInt('kira for 24Nu, rachu for 12.99Nu & glasses for 15.70');
//.......................................................................
// function addTwo(arr, num) {
//   sum = 0;
//   temp = arr.length;
//   if (num === arr[0]) {
//     console.log(num + arr[1]);
//   } else if (num === arr[temp - 1]) {
//     console.log(arr[temp - 1] + arr[temp - 2]);
//   } else {
//     for (let i = 0; i < temp; i++) {
//       if (num === arr[i]) {
//         sum += arr[i] + arr[i + 1] + arr[i - 1];
//       }
//     }
//     console.log(sum);
//   }
// }
// addTwo([6, 4, 2, 1], 4);
// addTwo([5, 3, 1, 9], 5);
// addTwo([12, 1, 34, 12, 52, 2], 2);
//.................................................................................
// const Submit = document.querySelector('.submit');
// const email = document.querySelector('.email');
// const Name = document.querySelector('.name');
// Submit.addEventListener('click', function (event) {
//   console.log(email.value);
//   console.log(Name.value);
//   event.preventDefault();
// });

// function myFunction(hell) {
//   for (let i = hell.length - 1; i >= 0; i--) {
//     // console.log(hell[i]);
//     document.write(hell[i]);
//   }
// }
// myFunction('sonam');

//............map().................................................
// let choden = [1, 2, 3, 4, 5, 6];

// let map1 = choden.map(x => x * 2);
// console.log(map1);

//.............reverse an array................
// const arr = [1, 2, 3, 4, 5];
// const temp = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   temp.push(arr[i]);
// }
// console.log(temp);

//..............sum of digits..........

// function sumOf(numb) {
//   var sum = 0;
//   while (numb > 0) {
//     sum = sum + (numb % 10);
//     numb = parseInt(numb / 10);
//   }
//   return sum;
// }
// console.log(sumOf(12));

//................recursive method..............

// function getSumOfDigits(number) {
//   if (number == 0) {
//     return 0;
//   }
//   return (number % 10) + getSumOfDigits(Math.floor(number / 10));
// }
// console.log(getSumOfDigits(17));

//..........exceptional..................

// function getSumOfDigits(num) {
//   return String(num)
//     .split('')
//     .reduce((a, b) => {
//       return a + Number(b);
//     }, 0);
// }

// console.log(getSumOfDigits(1)); // 👉️ 1
// console.log(getSumOfDigits(123)); // 👉️ 6
// console.log(getSumOfDigits(1234)); // 👉️ 10

// function myFunction(str) {
//   let temp = str.split(' ');
//   // console.log(temp);
//   let max = [''];
//   let size = 0;
//   for (let i = 0; i < temp.length; i++) {
//     if (temp[i].length >= size) {
//       size = temp[i].length;
//       console.log(size);
//       if (max[max.length - 1].length < temp[i].length) {
//         max = [];
//         max.push(temp[i]);
//       } else {
//         max = [...max, temp[i]];
//       }
//       // console.log(max[max.length - 1].length);
//       // console.log(temp[i].length);
//     }
//   }
//   return [...max];
// }
// console.log(myFunction('i love to cook on holidays chickens'));

//.................... palindorme ................
// let res = '';
// function palindrome(str) {
//   let temp = '';
//   // console.log(typeof str);
//   for (let i = str.length - 1; i >= 0; i--) {
//     temp = temp + str[i];
//     res = temp;
//   }
//   if (temp != str) {
//     console.log(`is not palindrom`);
//   } else {
//     console.log(`is palindrom`);
//   }
//   // console.log(typeof temp);
// }
// res;
// palindrome('level');

//....................sum of array element.........
// function sumOfelement(arr) {
//   let number = 0;
//   arr.forEach(element => (number += element));
//   return number;
// }
// console.log(sumOfelement([1, 2, 3, 4]));

// let number = 0;
// function myFunction(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     number += arr[i];
//   }
//   return number;
// }
// console.log(myFunction([1, 2, 3]));

//...............................max and min of array............

// function maxminarr(arr) {
//   let temp = arr.sort((min, max) => {
//     return min - max;
//   });
//   let greatest = temp.pop();
//   let lowest = temp.shift();
//   console.log(`min element ${lowest} && max element ${greatest}`);
//   // return temp;
// }
// console.log(maxminarr([2, 3, 4, 1]));

//....................duplicate with freqquencies...............

// let count = {};
// function dep(arr) {
//   for (let i of arr) {
//     if (count[i]) {
//       count[i] += 1;
//     } else {
//       count[i] = 1;
//     }
//   }
//   return count;
// }
// // console.log(dep(['a', 'c', 'f', 's', 'a', 'c', 'f', 'a', 's', 'a']));

// console.log(dep([10, 20, 20, 10, 10, 20, 5, 20]));

//.................prime check.............
// function isprime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   if (num == 2) {
//     return true;
//   }
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//     return true;
//   }
// }
// console.log(isprime(25));
//.................find divisor............................

// function divisior(num) {
//   for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//       console.log(i);
//     }
//   }
// }
// divisior(10);
//......................simple check..................
// function checkNum(num) {
//   if (num == 0) {
//     console.log('its zero');
//   } else if (num > 0) {
//     console.log('its positive');
//   } else {
//     console.log('its neg');
//   }
// }
// checkNum(-10);

//................HCf.................
// let GCF;
// function HCF(num1, num2) {
//   for (let i = 0; i < num1 && i < num2; i++) {
//     if (num1 % i == 0 && num2 % i == 0) {
//       GCF = i;
//     }
//   }
//   return GCF;
// }
// console.log(HCF(10, 20));

//.................armstrong number................

// let sum = 0;
// const number = prompt('Enter a three-digit positive integer: ');

// // create a temporary variable
// let temp = number;
// while (temp > 0) {
//   // finding the one's digit
//   let remainder = temp % 10;

//   sum += remainder * remainder * remainder;

//   // removing last digit from the number
//   temp = parseInt(temp / 10); // convert float into integer
// }
// // check the condition
// if (sum == number) {
//   console.log(`${number} is an Armstrong number`);
// } else {
//   console.log(`${number} is not an Armstrong number.`);
// }

// let arr = [[1, 2, 3, 4][(2, 3, 4, 2)][(1, 3, 2, 4)][(3, 4, 5, 6)]];
