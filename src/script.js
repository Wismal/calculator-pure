let outcome = document.getElementById("outcome");
let delBt = document.getElementById("delButton");
let resetBt = document.getElementById("resetButton");
let equalBt = document.getElementById("equalButton");

let currentInp = "";
let previousInp = "";
let operator = null;
let resetScreen =  false;


function addToDisplay(value) {
  //En el caso que no haya nada o se haya puesto un operador entre otros, reiniciamos currentInp.
  if (currentInp === "0" || resetScreen) {
      currentInp = value;
      resetScreen = false;

  }
  else currentInp += value;
  console.log(currentInp);
  updateDisplay();
}


function updateDisplay() {

  let valueInt = parseFloat(currentInp);

  if (Math.abs(valueInt) > 1e9 || Math.abs(valueInt) < 1e-9 && valueInt !== 0) valueInt = valueInt.toExponential(5);
  //outcome.innerHTML = currentInp; innerHTML lee tambien etiquetas y es menos seguro constra XSS
  outcome.textContent = valueInt;
}


function setOperation(op) {
  if (operator !== null) calculate();

  previousInp = currentInp;
  operator = op;
  resetScreen = true;
}


function calculate() {
  let result;
  let currentNum = parseFloat(currentInp);
  let previousNum = parseFloat(previousInp);

  switch(operator){
    case '+':
      result = previousNum + currentNum;
      break;
    case '-':
      result = previousNum - currentNum;
      break;
    case '*':
      result = (previousNum * currentNum);
      break;
    case '/':
      result = (previousNum / currentNum);
      break;
    default:
      return;
  }

  currentInp = result.toFixed(10).toString();

}

equalBt.addEventListener("click", function() {
  //Se llama a calcular para obtener currentInp
  calculate();
  updateDisplay();
  resetScreen = true;
})


resetBt.addEventListener("click", function() {

  currentInp = "0"
  previousInp = ""
  operator = null;
  updateDisplay()
  resetScreen = false;
})


delBt.addEventListener("click", function() {
  if (currentInp.length > 1) {
    currentInp = currentInp.slice(0, -1)
  }else currentInp = "0";
  updateDisplay();
  resetScreen = true;
})

