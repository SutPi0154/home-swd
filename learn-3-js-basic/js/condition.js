// if (false) {
//   console.log(`a`);
//   console.log(`b`);
//   console.log(`c`);
// } else {
//   console.log(`this is false`);
// }

// start in 9 hour
//can enter before 9 hour
//after 9 hour , we can't enter

function CanIcome(reachTime) {
  //   let result;
  //   if (reachTime <= 9) {
  //     // console.log(`you can enter`);
  //     result = `အတန်းထဲဝင်ပါ`;
  //   } else {
  //     result = `အချိန်နောက်ကျပါသဖြင့် အရတော့ပာ`;
  //   }

  //   return result;

  if (reachTime <= 9) {
    return `you can enter`;
  }
  return `you can't`;
}

console.log(CanIcome(8));

// mark check for myanamr

// let mark = 40 ;

function checkmark(mark) {
  if (mark >= 80) {
    return `Distation`;
  } else if (mark >= 40) {
    return `pass`;
  } else if (mark < 40) {
    return `fail`;
  }
}

console.log(checkmark(70))
console.log(checkmark(80))
console.log(checkmark(24))