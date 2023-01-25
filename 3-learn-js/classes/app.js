// class Person {
//   name = `mg mg`;
//   age = 23;
//   learn() {
//     return this.name` can learn everything`;
//   }
// }
// console.log(Person);

// // class => obj ( instantiate)
// const person = new Person();
// console.log(person);

// class Student {
//   // name , age , major

//   constructor(name, age, gender, major) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.major = major;
//     this.pronoun = this.gender === `male` ? `he` : `she`;

//     this.namePerfix = this.gender === `male` ? `mg ` : `ma `;
//     this.bridthYear = 2022 - this.age;
//     this.subjects = [`myan`, `eng`, `maths`, `che`, `phy`, this.major];
//   }
//   learn() {
//     return `${this.name} learns ${this.subjects}`;
//   }
//   about() {
//     return `${this.name} was born in ${this.bridthYear} and ${this.pronoun} is ${this.age} and learning ${this.subjects} `;
//   }
// }

// class Monitor extends Student {
//   room = `Grade A`;
// }
// const st1 = new Student(`Mg Mg`, 23, `male`, `bio`);
// console.log(st1.about());
// const st2 = new Student(`mya mya`, 34, `female`, `eco`);
// console.log(st2);

// const g1 = new Monitor(`zaw zaw`, 17, `male`, `bio`);
// // porfit
// console.log(g1);
// // const st1 = new Student();

// // st1.name = `mg mg`;
// // st1.age = 24;
// // st1.major = `bio`;
// // st1.learn = function () {
// //   return this.name + ` is bio student`;
// // };
// // console.log(st1);

// // Private  class fields
// // static   class fields
// // plubic   class fields

// class A {
//   a = `aaa`;
//   b = `bbb`;
//   #ok = `oknasa`;
//   static y = `yyyy`;
//   static run() {
//     return `run`;
//   }
// }
// class B extends A {
//   c = `ccc`;
// }
// console.log(A.y);
// const a = new A();
// console.log(a);

// console.log(a.ok);

// method chianing
// class A {
//   x() {
//     console.log(`this is x`);
//     return this;
//   }
//   y() {
//     console.log(`this is y`);
//     return this;
//   }
//   z() {
//     console.log(`this is z`);
//     return this;
//   }
// }
// const a = new A();

// a.x();
// a.y();
// a.z();
// a.x().y().z();

// build in function

// const d = new Date();
// console.log(d);
// console.log(d.toDateString())
// console.log(d.toLocaleTimeString())
// console.log(d.toLocaleDateString())

// d.setDate(d.getDay() + 25);
// d.setMonth(d.getMonth() + 4);
// d.setDate(d.getDate() + 25);
// console.dir(d);

// console.log(d.getDate());
// console.log(d.getFullYear());
// console.log(d.getTimezoneOffset());
// console.log(d.getDay());
// console.log(this);

// const str = new String(`   min ga lar par  `);
// console.log(str);
// // console.log(typeof str);
// console.log(str.length);
// console.log(str[4]);
// console.log(str.substring(5, 9));
// console.log(str.search(`ga`));
// console.log(str.replace(`ga`, `za`));
// console.log(str.trim());

// // const num = `3455645`;
// // console.log(num.padStart(14, 0));
// // console.log(str.();
// console.log(str.trim().split(` `));

// const num = new Number("453.5642");
// // console.log(num.toString());
// // console.log(num.toFixed(2));
// console.log(num.toPrecision(2));
// const strNum = Number(`24554.898`);

// // console.log(parseInt(strNum));
// // console.log(parseFloat(strNum));
// // console.log(isNaN(`htet` - `htet`));
// console.log(Math.round(466.56));
// console.log(Math.ceil(466.56));
// console.log(Math.floor(466.56));
// console.log(Math.ceil(Math.random() * 10));

// function run(x, y) {
//   return y(x);
// }
// console.log(
//   run(5, function (x) {
//     return x + 5;
//   })
// );

// arrow function (function expression)

// const arr = () => `this is arrow function`;
// const run = new Function(`a`, `b`, `return a + b`);

// console.log(run(3, 4));
// console.dir(run);

// function fun(x, y) {
//     console.log(arguments)
//   return x + y;
// }
// console.log(fun.bind(null, 1, 3).call());
class Student {
  #name = `nang sian sut`;
  static age = 32;
}

console.log(Student[`age`]);
const str1 = new Student();
// console.log(str1.name);

const dotted = "İstanbul";

console.log(`EN-US: ${dotted.toLocaleLowerCase("en-US")}`);
// expected output: "i̇stanbul"

console.log(`TR: ${dotted.toLocaleLowerCase("tr")}`);
// expected output: "istanbul"
