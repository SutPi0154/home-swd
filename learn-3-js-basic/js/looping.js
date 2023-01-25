// console.log(`a`);
// for (let i = 1; i <= 5; i++) {
//   if (i == 2) continue;
//   console.log(i, `=====`);
//   if (i === 3) break;
// }

// const letters = [`a`, `b`, `c`, `d`];

// for (let i = 0; i <= letters.length; i++) {
//   console.log(i, letters[i]);
// }

// const marks = [54, 45, 86, 84, 14, 67];

// let total = 0;

// for (let i = 0; i <marks.length; i++) {
//   console.log( marks[i]);
//   total += marks[i];
// }
// console.log( `total marks :`,total);

// for (let i = 0; i <marks.length; i++) {
//   console.log(marks[i]);
// }

// const mgmg = {
//   name: `mg mg`,
//   age: 15,
//   marks: [
//     {
//       id: 1,
//       subject: `Myanamr`,
//       mark: 60,
//     },
//     {
//       id: 2,
//       subject: `English`,
//       mark: 87,
//     },
//     {
//       id: 3,
//       subject: `Maths`,
//       mark: 88,
//     },
//     {
//       id: 4,
//       subject: `Chems`,
//       mark: 85,
//     },
//     {
//       id: 5,
//       subject: `physics`,
//       mark: 26,
//     },
//     {
//       id: 6,
//       subject: `bio`,
//       mark: 65,
//     },
//   ],
// };

// // add new information to mgmg
// mgmg.passOrFail = {};
// mgmg.totalMarks = 0;

// for (let i = 0; i < mgmg.marks.length; i++) {
//   console.log(mgmg.marks[i].mark);
//   mgmg.totalMarks += mgmg.marks[i].mark;
//   //   mgmg.passOrFail[mgmg.marks[i].subject] =
//   //     mgmg.marks[i].mark >= 40 ? `pass` : `fail`;

//   // checking pass or fail
//   if (mgmg.marks[i].mark >= 40) {
//     mgmg.passOrFail[mgmg.marks[i].subject] = `pass`;
//   } else if (mgmg.marks[i].mark >= 80) {
//     mgmg.passOrFail[mgmg.marks[i].subject] = `D`;
//   } else {
//     mgmg.passOrFail[mgmg.marks[i].subject] = `fail`;
//   }
// }
// console.log(`total marks ;`, mgmg.totalMarks);

// console.log(mgmg);

// const mgmgInfo = {
//   name: `mg mg `,
//   age: 15,
//   marks: [
//     {
//       no: 1,
//       subject: `myanmar`,
//       mark: 56,
//     },
//     {
//       no: 2,
//       subject: `english`,
//       mark: 54,
//     },
//     {
//       no: 3,
//       subject: `maths`,
//       mark: 84,
//     },
//     {
//       no: 4,
//       subject: `chemistry`,
//       mark: 72,
//     },
//     {
//       no: 5,
//       subject: `physics`,
//       mark: 83,
//     },
//     {
//       no: 6,
//       subject: `bio`,
//       mark: 65,
//     },
//   ],
// };

// mgmgInfo.totalMarks = 0;
// mgmgInfo.result = {};

// for (let i = 0; i < mgmgInfo.marks.length; i++) {
//   //   console.log(mgmgInfo.marks[i].mark);
//   mgmgInfo.totalMarks += mgmgInfo.marks[i].mark;
//   mgmgInfo.result[mgmgInfo.marks[i].subject] = mgmgInfo.marks[i].mark
//     ? `pass`
//     : `fail`;
// }

// // console.log(mgmgInfo);

// // looping Star

// for (let i = 1; i <= 6; i++) {
//   star = ``;
//   for (let h = 1; h <= i; h++) {
//     star += `* `;
//   }
//   //   console.log(`*`, i);
//   console.log(star);
// }

// let star = ``;
// for (let i = 1; i <= 5; i++) {
//   star += `*`;
//   console.log(i, star);
// }

// function starGenerator(count, element = ` *`) {
//   let star = ``;
//   for (let i = 1; i <= count; i++) {
//     star += element;
//   }
//   return star;
// }

// console.log(starGenerator(6, ` +`));

// for (let i = 1; i <= 6; i++) {
//   console.log(starGenerator(i));
// }
// for (let i = 6; i >= 1; i--) {
//   console.log(starGenerator(i,i % 2 ? ` =` : ` *`));
// }

const ratings = [
  {
    id: 1,
    name: `mg mg`,
    rate: 4,
  },
  {
    id: 2,
    name: `Kyaw Kyaw`,
    rate: 3,
  },
  {
    id: 3,
    name: `Zaw Zaw`,
    rate: 1,
  },
  {
    id: 4,
    name: `Hla Hla`,
    rate: 3,
  },
  {
    id: 5,
    name: `Thun Thun`,
    rate: 4,
  },
  {
    id: 6,
    name: `Ko mg`,
    rate: 2,
  },
  {
    id: 7,
    name: `Zaw mg`,
    rate: 5,
  },
];

for (let i = 0; i < ratings.length; i++) {
  let star = ``;
  for (let x = 1; x <= 5; x++) {
    if (x <= ratings[i].rate) {
      star += ` *`;
    } else star += ` -`;
  }
  console.log(star);
console.log(ratings[i].id, ` :`, `Rating`, star)

}
// for (let i =)
