// const x = window.prompt();
// window.alert(x);

// aera (width,bread)

// const width = window.prompt(`Input Width`);
// const bread = window.prompt(`Input Bread`);
// const area = width * bread;

// window.alert(`the area is ` + area + ` sqft`);

// const run = (x, y) => {
//   console.log(typeof x);
//   console.log(typeof y);
//   return parseFloat(x) + parseFloat(y);
// };

// const inputX = window.prompt(`Input X....`);
// const inputY = window.prompt(`Input Y....`);
// window.alert(run(inputX, inputY));

// const answer = window.confirm(`ထမင်းစားပြီးပြီလား`);
// window.alert(answer ? `စားပြီးပြီ` : `မစားရသေးဘူး`);

// const myName = window.prompt(`What is your name?`);
// console.log(`My name is ${myName}`);

// const h1 = document.getElementsByTagName(`h1`)[0];
// console.dir(h1);
// console.log(h1.title);
// console.log(h1.innerText);
// console.log(h1.style.color);
// const ShowAlert = (event, text) => alert(text);

// const btn = document.querySelector(`#btn`);

// btn.onclick =  ShowAlert.bind(null,event,`hello world`);

// const h1 = document.querySelector(`h1`);

// h1.addEventListener(`mouseenter`, () => console.log(`mouse in event`));
// h1.addEventListener(`mouseout`, () => console.log(`mouse out event`));
// h1.addEventListener(`mousemove`, (e) => console.log(e, `mouse move`));

// // btn.addEventListener(`click`, ShowAlert.bind(null,event,`hello world`));
// const select = document.querySelector(`select`);

// const input = document.querySelector(`input`);

// input.addEventListener(`keydown`, () => console.log(`keyDown event`));
// // input.addEventListener(`keypress`, () => console.log(`keypress event`));
// // input.addEventListener(`keyup`, () => console.log(`keyup event`));
// // input.addEventListener(`focus`, () => console.log(`focus event`));
// // input.addEventListener(`blur`, () => console.log(`blur event`));
// input.addEventListener(`change`, (e) => {
//   console.log(e.target.valueAsDate);
// });
// select.addEventListener(`change`, () => console.log(`select event`));

// const form = document.querySelector(`form`);

// form.addEventListener(`submit`, (e) => {
//   e.preventDefault();
//   console.log(document.querySelector(`input`).valueAsDate);
// });
// window.addEventListener(`scroll`, () => console.log(`You scroll`));

// document
//   .querySelector(`#box`)
//   .addEventListener(`scroll`, () => console.log(`div scroll`));

// console.log(`1`);
// window.addEventListener(`load`, () => console.log(`window load`));
// console.log(`2`);
// console.log(`3`);
// document.querySelector(`a`).addEventListener(`click`, (e) => {
//   e.preventDefault();
//   console.log(e);
// });
