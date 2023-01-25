const creatBtn = document.querySelector("#creatBtn");
const lists = document.querySelector("#lists");
const textInput = document.querySelector("#textInput");

const creatLi = (text) => {
  const dyID = "flexCheck" + Date.now();
  const li = document.createElement("li");
  li.classList = "list-group-item d-flex align-items-center";
  // li.ondblclick = edit(event);
  li.addEventListener("dblclick", edit);

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
  <button class="btn btn-sm btn-danger ms-auto rounded " onclick="del(event)">
    Del
  </button> `;
  return li;
};

// add lists button function
const addList = () => {
  //   const text = textInput.value;
  if (textInput.value.trixm()) {
    lists.append(creatLi(textInput.value));
    textInput.value = null;
  } else alert("Input text is empty");
};

// lists.append(creatLi(`apple`));

creatBtn.addEventListener(`click`, addList);

textInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    addList();
  }
});

const del = (event) => {
  if (confirm("Are you sure to delete?")) {
    event.target.parentElement.remove();
  }
};

const done = (event) => {
  event.target.nextElementSibling.classList.toggle(
    `text-decoration-line-through`
  );
};

const edit = (event) => {
  // console.log(event.target);
  const old = event.target.querySelector(".form-check-label");
  const newText = prompt("Input new Text", old.innerText);
  // console.log(newText);
  old.innerText = newText;
};
