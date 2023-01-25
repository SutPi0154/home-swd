// const myName = "Sut Pi";

// // inches to feet function
// // unit conversation 12 inches = 1 ft

// function inchesToFeet(input) {
//   return input / 12 + " ft ";
// }

// console.log(inchesToFeet(45));
// console.log(inchesToFeet(2345));
// console.log(inchesToFeet(43));
// console.log(inchesToFeet(67));

// Array

// let fruits = ["apple", "orange", "banana", "grapes"];

//resign value of array
// fruits[2] = "aaa bananas";

// let mySelf = [
//   "nang sian sut",
//   19,
//   null,
//   "develper",
//   ["html", "css", "js", "php"],
// ];

//  console.log(fruits);
// console.log(mySelf[3]);
// console.log(mySelf[3]);
// console.log(mySelf[4][2]);

// console.log(
//   ` my name is ${mySelf[0]} and ${mySelf[1]} years old.
//    I have ${mySelf[2]} girlfriend and works as ${mySelf[3]}
//    :understands in ${mySelf[4]} : working as ${mySelf[4][2]} developer`
// );

// const arr = [];
// arr[0] = "aaaa";
// arr[2] = "bbbb";
// arr[6] = 34;
// arr[1] = "eeee";

// console.log(arr, typeof arr);
// console.log(arr.length);

// const arr = [];

// arr[arr.length] = "aaaa";
// arr[arr.length] = "bbbb";
// arr[arr.length] = "cccc";
// arr[arr.length] = "dddd";
// arr[arr.length] = "eeee";

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[arr.length - 1]);

// const mySelf = {
//   myName: `nang sian sut`,
//   myAge: 19,
//   myJob: `developer`,
//   gf: null,
//   skill: ["html", "css", "js"],
// };

// console.log(mySelf.myName);
// console.log(mySelf.myAge);
// console.log(mySelf.skill[2]);
// console.log(mySelf["gf"]);

// // ------------

// const obj = {};

// obj.name = `kyw kyaw`;
// obj.age = 13;
// obj.skill = [`html`, `css`, `js`];
// obj.gf = null;
// obj[`liveIn`] = `yangon`

// console.log(obj)

// console.log(obj.skill[2]);

// problem 1

// let name = `mg mg`;
// let age = 15;
// let money = 200;

// money -= 50; // buy orange

// console.log(money);

// const mgmgBag = [`mm`, `eng`, `maths`, `chem`, false, `bio`];

// let canMgmgSmole = false;
// let canMgmgFriendsSmoke = true;

// const mgmgSelf = {
//   name: `mg mg`,
//   age: 15,
//   canSmoke: false,
//   money,
//   bag: mgmgBag,
// };

// const KyawKyawSelf = {
//   name: `kyaw kyaw`,
//   age: 15,
//   canSmoke: true,
//   money: 50,
//   bag: [`mm`, `eng`, `maths`],
// };

const SuSuSelf = {
  name: `Su Su`,
  age: 15,
  canSmoke: true,
  money: 1500,
  bag: [`mm`, `eng`, `maths`, "che", `phy`, `bio`],
};

// console.log(`she is ${SuSuSelf.name} and ${SuSuSelf.age} years old`)

// console.log(mgmgSelf);
// console.log(KyawKyawSelf);
// console.log(SuSuSelf);

// const students = [
//   {
//     name: `mg mg`,
//     age: 15,
//     canSmoke: false,
//     money,
//     bag: mgmgBag,
//   },
//   {
//     name: `kyaw kyaw`,
//     age: 15,
//     canSmoke: true,
//     money: 50,
//     bag: [`mm`, `eng`, `maths`],
//   },
//   {
//     name: `Su Su`,
//     age: 15,
//     canSmoke: true,
//     money,
//     bag: [`mm`, `eng`, `maths`, "che", `phy`, `bio`],
//   },
// ];

// console.log(students[0].money);
// console.log(students[0].bag[3]);
// console.log(students[1].bag[2]);
// console.log(students[2].name);

// let num = 5;
// num += 1;
// num += 1;
// num += 1;

// ++num;
// ++num;
// ++num;

// console.log(++num);
// console.log(--num);

// logical operator && || !

// let condition = true;
// console.log(!condition);

// let condition = true || false &&true ;

// console.log(condition);

// let x = 5;

// console.log(x ? true : false);

// let haveYouFinishedDinner = false;
// let result = haveYouFinishedDinner ? `စားပြီးပါပြီ` : `မစားရသေးပါ`;
// console.log(result);

// console.log(`san kyi tahr ${5 ? true : false}`);

// function run(text = `for aa`) {
//   return "this is run " + text;
// }

// console.log(run());

// (function () {
//   let x = 4;
//   let y = 5;
//   console.log(x + y);
//   return x + y;
// })();

// console.log(
//   ` the answer that 1 + 2 is ${(function () {
//     return 1 + 2;
//   })()}`
// );

function inchesToFeet(input) {
  return showResult(input / 12 + ` ft`);
}

function showResult(text) {
  return `the result is ` + text;
}
console.log(inchesToFeet(34));
