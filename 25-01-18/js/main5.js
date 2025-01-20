const valueInput = document.querySelector("#valueInput input");
const memoryInput = document.querySelector("#memoryInput input");

var memory = [];
var ar = [];
function run() {
  valueInput.value = eval(valueInput.value);
  memory = valueInput.value;
  memoryInput.value = memory;
  ar = [];
}
function handle(a) {
  ar.push(a);
  valueInput.value = ar.join("");
  memoryInput.value = "";
  console.log("hi");
}
function remove() {
  ar.pop();
  valueInput.value = ar.join("");
  memoryInput.value = "";
}
