const createBtn = document.querySelector("#createBtn");
const lists = document.querySelector("#lists");
const textInput = document.querySelector("#textInput");
const total = document.querySelector("#total");
const doneTotal = document.querySelector("#doneTotal");

const data = ["banana", "apple", "orange", "mango"];

const createLi = (text) => {
  const dyID = "flexCheck" + Math.random();
  const li = document.createElement("li");
  li.classList = "list-group-item d-flex align-items-center";
  // li.ondblclick = edit(event);
  // li.addEventListener("dblclick", edit);

  li.innerHTML = `    
<div class="input-group">
  <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="${dyID}"
      onchange="done(event)"
    />
    <label class="form-check-label" for="${dyID}">
    ${text}
    </label>
  </div>
  </div>
  <div class=" btn-group">
  <button class="btn btn-sm btn-outline-dark edit">
    <i class="bi bi-pencil pe-none "></i>
  </button> 
  <button class="btn btn-sm btn-outline-dark del">
  <i class="bi bi-trash3 pe-none "></i>
</button> 
  </div>`;
  return li;
};

const counter = () => {
  const totalCount = lists.children.length;
  const doneTotalCount = [...lists.children].filter(
    (el) => el.querySelector(".form-check-input").checked === true
  ).length;
  total.innerText = totalCount;
  doneTotal.innerText = doneTotalCount;
};

// add lists button function
const addList = () => {
  //   const text = textInput.value;
  if (textInput.value.trim()) {
    lists.append(createLi(textInput.value));
    textInput.value = null;
  } else alert("Input text is empty");
  counter();
};

// const edit = () => {};

// lists.append(createLi(`apple`));

createBtn.addEventListener(`click`, addList);

textInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    addList();
  }
});

const del = (event) => {
  if (confirm("Are you sure to delete?")) {
    event.target.closest(".list-group-item").remove();
  }
  counter();
};

const done = (event) => {
  event.target.nextElementSibling.classList.toggle(
    `text-decoration-line-through`
  );
  counter();
};
data.forEach((d) => lists.append(createLi(d)));

const edit = (event) => {
  // console.log(event.target);
  const old = event.target.closest("li").querySelector(".form-check-label");
  const newText = prompt("Input new Text", old.innerText);
  if (newText && newText.trim()) {
    old.innerText = newText;
  }
  counter();
};

// [...lists.children].forEach((li) => {
//   li.querySelector(".edit").addEventListener("click", edit);
//   li.querySelector(".del").addEventListener("click", del);
// });

lists.addEventListener("click", (event) => {
  if (event.target.classList.contains("del")) {
    del(event);
  } else if (event.target.classList.contains("edit")) {
    edit(event);
  }
});
window.addEventListener("load", counter());
