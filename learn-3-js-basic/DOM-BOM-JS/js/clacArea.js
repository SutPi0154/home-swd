const result = document.getElementById(`result`);
const store = document.getElementById(`store`);
const clear = document.getElementById(`clear`);
const width = document.getElementById(`width`);
const breadth = document.getElementById(`breadth`);
const calculate = document.getElementById(`calculate`);
const records = document.getElementById(`records`);

const clearResult = () => {
  result.innerText = null;
};

const calArea = () => {
  //   console.log(width.value * breadth.value);
  const area = width.valueAsNumber * breadth.valueAsNumber;
  result.innerText = `widths:${width.value}ft * breadths:${breadth.value}ft = ${area}sqft `;
  width.value = breadth.value = null;
};  
calculate.onclick = calArea;
clear.onclick = clearResult;

store.onclick = () => {
  records.innerHTML += `<li>${result.innerText}</li>`;
  clearResult();
};
