const display = document.getElementById("input");

function append(input) {
  display.value += input;
}
function calculate() {
  let result = eval(display.value);
  display.value = result;
}
function clearDisplay() {
  display.value = " ";
}
