// function canIPass(examMark, viperMark) {
//   if (examMark >= 80 || viperMark >= 60) {
//     return `pass`;
//   }
//   return `fail`;
// }
// console.log(canIPass(50,60));

// let a = true ;
// a && (function(){
//     console.log(`a par kor`)
//     return true
// })() && console.log(`min ga lar par`)
// console.log(canIPass(50, 70));

// string ပဲလက်ခ့တဲ့ fuction

// function showMyName(name) {
//   if (typeof name === `string`) return name;
//   return false;
// }

// console.log(showMyName(`ang kaung`));
// console.log(showMyName(34));
// console.log(showMyName([`a`, `b`, `c`]));

//function arguments

function run(a, b, c) {
  console.log(arguments);
}
console.log(run(`q`,`p`,`t`))