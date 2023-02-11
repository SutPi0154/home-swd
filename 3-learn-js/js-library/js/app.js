// const myName = "Nang sian sut";
// console.log(_.camelCase(myName));

// const m = moment();
// m.add(5, "days");
// m.subtract(3, "years");
// console.log(m.format("D MMM Y"));

// // axios("https://dummyjson.com/products/1").then((data) =>
// //   console.log(data.data)
// // );
// const run = async () => {
//   const data = await axios("https://dummyjson.com/products/1");
//   console.log(data);
// };
// run();
// Swal.fire(
//   "this is alert",
//   "Function to display a SweetAlert2 popup, with an object of options, all being optional. See the SweetAlertOptions interface for the list of accepted fields and values.",
//   "question"
// );\
// const btn = document.querySelector("button");
// const run = () => {
//   Swal.fire({
//     title: "Are you sure?",
//     text: "You won't be able to revert this!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, delete it!",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       const Toast = Swal.mixin({
//         toast: true,
//         position: "top-end",
//         showConfirmButton: false,
//         timer: 3000,
//         timerProgressBar: true,
//         didOpen: (toast) => {
//           toast.addEventListener("mouseenter", Swal.stopTimer);
//           toast.addEventListener("mouseleave", Swal.resumeTimer);
//         },
//       });

//       Toast.fire({
//         icon: "success",
//         title: "Signed in successfully",
//       });
//     }
//   });
// };
// btn.addEventListener("click", run);

const ctx = document.getElementById("myChart");

// new Chart(ctx, {
//   type: "radar",
//   data: {
//     labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
//     datasets: [
//       {
//         label: "A of Votes",
//         data: [2, 5, 3, 7, 8],
//       },
//       {
//         label: "B of Votes",
//         data: [5, 3, 9, 6, 2],
//       },
//       {
//         label: "C of Votes",
//         data: [2, 5, 3, 7, 8],
//       },
//     ],
//   },
// options: {
//   scales: {
//     y: {
//       beginAtZero: true,
//     },
//   },
// },
// });
const tt = new Typed("#tt", {
  strings: ["MIn ga lar par", "Nay Kaung alr", "sar p p lar"],
  typeSpeed: 100,
  backSpeed: 50,
});
