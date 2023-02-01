// const modal = new bootstrap.Modal("#exampleModal");

// //user  က အသုံးပြုလာတာ 75% ဆိုရင် modal ပြမယ်
// const h75 =
//   0.75 * (document.body.getBoundingClientRect().height - window.innerHeight);

// window.addEventListener("scroll", () => {
//   console.log(scrollY);
//   if (scrollY > h75) {
//     modal.show();
//   }
// });

// window.addEventListener("resize", () => {
//   console.log(window.innerWidth);
//   console.log(window.innerHeight);
//   console.log(window.outerWidth);
//   console.log(window.outerHeight);
// });

// window.addEventListener("online", () => {
//   console.log("You are online");
// });

// window.addEventListener("offline", () => {
//   console.log("You are offline");
// });

// const run = () => console.log("I am run");

// setTimeout(run, 3000);
// setInterval(run, 3000);

// const clock = document.querySelector("#clock");
const clockStart = document.querySelector("#start");
const clockStop = document.querySelector("#stop");

// const run = () => {
//   const d = new Date();
//   const h1 = document.createElement("h1");
//   clock.innerText = d.getHours() + `:` + d.getMinutes() + `:` + d.getSeconds();
//   // document.body.append(h1);
// };
// const runClock = setInterval(run, 1000); //state

// clockStart.addEventListener("click", () => setInterval(run, 1000));
// clockStop.addEventListener("click", () => clearInterval(runClock));

// let run;
// clockStart.addEventListener("click", () => {
//   run = setTimeout(() => console.log("I'm Sut Pi"), 3000);
// });

// clockStop.addEventListener("click", () => {
//   clearTimeout(run);
// });

// const test = (start, stop) => {
//   let i = start;

//   const run = setInterval(() => {
//     console.log("hello", ++i);
//     if (i === stop) {
//       clearInterval(run);
//     }
//   }, 1000);
// };
clockStart.addEventListener("click", () => {
  // const windowFeatures = "left=100,top=100,width=320,height=320";
  // const handle = window.open(
  //   "http://mms-it.com",
  //   "mozillaWindow",
  //   windowFeatures
  // );

  scrollTo(0, document.querySelector("#to").getBoundingClientRect().y);
});
clockStop.addEventListener("click", () => {
  close();
});
