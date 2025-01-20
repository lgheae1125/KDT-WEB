const input = document.querySelector("#input");
const calcButton = document.querySelector("#calcButton");
const calcValue = document.querySelector("#calcValue");

calcButton.addEventListener("click", () => {
  const calcForm = input.value;
  if (!calcForm) return;
  const calcValueTemp = eval(calcForm);
  calcValue.append(
    `${calcForm} = ${calcValueTemp}`,
    document.createElement("br")
  );
  input.value = "";
});
