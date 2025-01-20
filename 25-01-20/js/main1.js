const button = document.querySelector("button");
var calcInput = document.querySelector("#calcInput");

function calc() {
  const input1Value = document.querySelector("#input1").value;
  const input2Value = document.querySelector("#input2").value;
  const sum = Number(input1Value) + Number(input2Value);

  calcInput.value = sum;
}

button.addEventListener("click", calc);
