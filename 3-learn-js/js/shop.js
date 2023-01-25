const fruits = {
  apple: 100,
  orange: 80,
  mango: 100,
  banana: 50,
};

const buying = [];

let total = 0;
function tax(ammount, taxRate = 5) {
  return (ammount * taxRate) / 100;
}

function buy(fruitName, quantity) {
  let cost = quantity * fruits[fruitName];

  //building obj
  const buyingObj = {
    fruitName,
    quantity,
    total: cost + ` mmk`,
    tax: tax(cost) + ` mmk`,
    actualcost: cost + tax(cost) + ` mmk`,
  };
  buying[buying.length] = buyingObj;

  total += cost;

  //   return fruitName +` : `+ quantity +` : `+cost + ` mmk`;
  return ` ${fruitName} : ${quantity} = ${cost} mmk`;
}
console.log(`Total :`, total, ` mmk`);
console.log(`TaxTotal :`, tax(total), ` mmk`);
console.log(`Net Total :`, tax(total) + total, ` mmk`);

console.log(buy(`banana`, 5));
console.log(buy(`mango`, 2));
console.log(buy(`orange`, 2));
console.log(buy(`apple`, 6));
console.log(buy(`orange`, 6));

const netTotalObj = {
  fruitName: `buy fruits`,
  quantity: ` - `,
  total: total + ` mmk`,
  tax: tax(total) + ` mmk`,
  actualcost: total + tax(total) + ` mmk`,
};

buying[buying.length] = netTotalObj;
console.log(buying);
console.table(buying);
