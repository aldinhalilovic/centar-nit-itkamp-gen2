const buttons = document.querySelectorAll("button");
const equals = document.getElementById("equals");
const calculatorDisplay = document.getElementById("calculatorDisplay");

console.log(equals);
let result = "";
const newParagraph = document.createElement("p");

calculatorDisplay.appendChild(newParagraph);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.value === "=") {
      return;
    } else {
      result += e.target.value;
      newParagraph.innerText = result;
    }
  });
});

equals.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(eval(result));

  newParagraph.innerText = eval(result);
});
