const mySelf = {
  //property
  name: `nag sian sut`,
  age: 17,
  live: `kale`,

  //method
  teach: function (what) {
    return `I can teach ${what}`;
  },

  //method es6 version
  learn(any = `anything`) {
    return ` I can learn ${any}`;
  },
  showThis : function (){
    console.log(this)
  }
};
console.log(mySelf.showThis());

// console.log(mySelf.teach(`html`))
// console.log(mySelf.learn(`backend`));
