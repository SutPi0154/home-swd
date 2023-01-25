// variable
const services = [
  {
    id: 1,
    title: `Domain Service`,
    price: 15,
  },
  {
    id: 2,
    title: `Hosting Service`,
    price: 30,
  },
  {
    id: 3,
    title: `Web Design Service`,
    price: 150,
  },
  {
    id: 4,
    title: `Maintenance Service`,
    price: 100,
  },
];

// selector
const app = document.querySelector("#app");
const invoiceForm = document.querySelector("#invoiceForm");
const selectService = document.querySelector("#selectService");
const quantity = document.querySelector("#quantity");
const lists = document.querySelector("#lists");
const subTotal = document.querySelector("#subTotal");
const tax = document.querySelector("#tax");
const total = document.querySelector("#total");
const listTable = document.querySelector("#listTable");
const addServiceOpenBtn = document.querySelector("#addServiceOpenBtn");
// const serviceModal = document.querySelector("#serviceModal");
const addServiceForm = document.querySelector("#addServiceForm");
const closeServiceModalBtn = document.querySelector("#closeServiceModalBtn");
const addServiceModal = new bootstrap.Modal("#addServiceModal");

//function

const createTr = (service, quantity) => {
  const tr = document.createElement("tr");
  const total = service.price * quantity;
  tr.setAttribute("service-id", service.id);
  tr.innerHTML = `
  <td class="d-flex justify-content-between">${service.title}
  <div class="dropdown">
  <i
  class="bi bi-three-dots-vertical "
  class="btn btn-secondary dropdown-toggle"
  type="button"
  data-bs-toggle="dropdown"
  aria-expanded="false"
></i>
 <ul class="dropdown-menu dropdown-btn">
  <li><a class="dropdown-item del-btn" href="#">Delete</a></li>
  <li><a class="dropdown-item" href="#">Another action</a></li>
  <li>
   <a class="dropdown-item" href="#">Something else here</a>
  </li>
 </ul>
</div>


  </td>
  <td class="text-end list-quantity">${quantity}</td>
  <td class="text-end">${service.price}</td>
  <td class="text-end listTotal">${total}</td>
  `;
  return tr;
};

const showTable = () => {
  if (lists.children.length) {
    listTable.classList.remove("d-none");
  } else {
    listTable.classList.add("d-none");
  }
};

// process (tasks)

const findTotal = () => {
  let realTotal = [...document.querySelectorAll(".listTotal")].reduce(
    (pv, cv) => pv + parseFloat(cv.innerText),
    0
  );
  const taxAmount = findTax(realTotal);
  const NetTotal = realTotal + taxAmount;
  subTotal.innerText = realTotal;
  tax.innerText = taxAmount;
  total.innerText = NetTotal;
};

const findTax = (amount, percentage = 5) => {
  return amount * (percentage / 100);
};
//service option loop
services.forEach(({ id, title }) =>
  selectService.append(new Option(title, id))
);

// data collect from form

invoiceForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const selectedService = services.find(
    (service) => service.id == selectService.value
  );

  const isExitedService = [...lists.children].find(
    (el) => el.getAttribute("service-id") == selectedService.id
  );

  if (isExitedService) {
    const existedQuantity = isExitedService.querySelector(".list-quantity");

    existedQuantity.innerText =
      parseFloat(existedQuantity.innerText) + quantity.valueAsNumber;
    isExitedService.querySelector(".listTotal").innerText =
      isExitedService.querySelector(".list-quantity").innerText *
      selectedService.price;
  } else {
    lists.append(createTr(selectedService, quantity.value));
  }

  findTotal();
  showTable();
  invoiceForm.reset();
});

//delete tr
app.addEventListener("click", (event) => {
  currentElement = event.target;
  if (currentElement.classList.contains("del-btn")) {
    currentElement.closest("tr").remove();
    findTotal();
  }
  showTable();
});

addServiceOpenBtn.addEventListener("dblclick", () => {
  // console.log("add service");
  addServiceModal.show();
  // serviceModal.classList.remove("d-none");
  // addServiceBootstrapModal.show();
});

closeServiceModalBtn.addEventListener("click", () => {
  addServiceModal.hide();
});

addServiceForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  console.log(formData.get("serviceTitle"), formData.get("servicePrice"));

  // add data

  const id = Date.now();
  services.push({
    id,
    title: formData.get("serviceTitle"),
    price: formData.get("servicePrice"),
  });
  // add to dom
  selectService.append(new Option(formData.get("serviceTitle"), id));

  event.target.reset();
  // serviceModal.classList.add("d-none");
  addServiceModal.hide();
});
