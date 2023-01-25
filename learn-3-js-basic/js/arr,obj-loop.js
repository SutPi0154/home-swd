const fruits = [`apple`, `orange`, `banana`, `mango`];

for (fruit of fruits) {
  console.log(fruit);
}

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
for(rating of ratings){
    // console.log(ratings[rate])
    console.log(rating.id,rating.name  ,rating.rate)
}
