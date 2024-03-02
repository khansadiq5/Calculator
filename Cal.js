let result = document.getElementById("result");

function display(number) {
  result.value += number;
}

function calculate() {
  let finalNum = result.value;
  let finalRes = eval(finalNum);
  result.value = finalRes;
}

function clrs() {
  result.value = "";
}
function dle() {
    result.value  = result.value.slice(0, -1);
}
