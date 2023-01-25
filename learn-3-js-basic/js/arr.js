console.log(`thank you`);

// record width * breadth = area sqft
const records = [];

function calcArea(width, breadth) {
  let area = width * breadth;
  const recordObj = {
    width: width + "ft",
    breadth: breadth + `ft`,
    area : area + `sqft`
  };
  records[records.length] = recordObj
  return area + ` sqft `;
}

console.log(calcArea(23, 45));
console.log(calcArea(12, 5));
console.log(calcArea(23, 14));
console.table(records);



