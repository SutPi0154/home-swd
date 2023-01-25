// function run(x, y) {
//   console.log(arguments);
//   return x + y;
// }
// console.log(run.bind(null, 10, 20).call());

// // const run1 = new Function(`x`, `y`, `return x+y`);
// // console.log(run1.toString);

// const obj = {
//   a: `aaa`,
//   b: `bbb`,
// };

// console.log(obj);
// console.log(obj.hasOwnProperty(`a`));
// console.log(Object.keys(obj));
// console.log(Object.values(obj));

function run(z, y, ...sum) {
  console.log(z, y);
  return sum.reduce((pv, cv) => pv + cv, 0) + z + y;
}
console.log(run(10, 10, 10, 10, 10, 10, 10));

// const arr = [10, 20, 4356, 5, 6, 7, 34];
// console.log(arr[0]);
// console.log(arr[1]);

// const [a, b, ...spread] = arr;
// console.log(a);
// console.log(b);
// console.log(spread);

const obj = {
  a: `aaa`,
  b: `bbb`,
  c: `ccc`,
};

const { a, b, c } = obj;
console.log(a);
console.log(b);
console.log(c);
