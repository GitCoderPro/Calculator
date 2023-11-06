const zero = document.querySelector("#zero")
const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")
const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")
const multiplier = document.querySelector("#multiplier")
const divide = document.querySelector("#divide")
const enter = document.querySelector("#enter")
const firstNumber = document.querySelector("#first-number");
const operator = document.querySelector("#operator");
const secondNumber = document.querySelector("#second-number");
const result = document.querySelector("#result");
const buttons = document.querySelectorAll(".button");
const clearButton = document.querySelector("#clear");

const add = () => {
  const num1 = parseFloat(firstNumber.innerHTML) || 0;
  const num2 = parseFloat(secondNumber.innerHTML) || 0;
  const sum = num1 + num2;
  result.innerHTML = sum;
}

const subtract = () => {
  const num1 = parseFloat(firstNumber.innerHTML) || 0;
  const num2 = parseFloat(secondNumber.innerHTML) || 0;
  const difference = num1 - num2;
  result.innerHTML = difference;
};

const displayNumber = (value) => {
  if (operator.innerHTML === '') {
    firstNumber.innerHTML += value;
  } else {
    if (result.innerHTML !== '') {
      secondNumber.innerHTML = value;
      result.innerHTML = '';
    } else {
      secondNumber.innerHTML += value;
    }
  }
};

const displayOperator = (value) => {
  operator.innerHTML = value;
};

const multiply = () => {
  const num1 = parseFloat(firstNumber.innerHTML) || 0;
  const num2 = parseFloat(secondNumber.innerHTML) || 0;
  const product = num1 * num2;
  result.innerHTML = product;
};

const divideNumbers = () => {
  const num1 = parseFloat(firstNumber.innerHTML) || 0;
  const num2 = parseFloat(secondNumber.innerHTML) || 0;
  if (num2 !== 0) {
    const quotient = num1 / num2;
    result.innerHTML = quotient;
  } else {
    result.innerHTML = "Error: Division by zero";
  }
};

const calculate = () => {
  const num1 = parseFloat(firstNumber.innerHTML);
  const num2 = parseFloat(secondNumber.innerHTML);

  switch (operator.innerHTML) {
    case '+':
      result.innerHTML = num1 + num2;
      break;
    case '-':
      result.innerHTML = num1 - num2;
      break;
    case 'x':
      result.innerHTML = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        result.innerHTML = "Error: Division by zero";
      } else {
        result.innerHTML = num1 / num2;
      }
      break;
  }
};

const clearAll = () => {
  firstNumber.innerHTML = '';
  operator.innerHTML = '';
  secondNumber.innerHTML = '';
  result.innerHTML = '';
};

buttons.forEach(button => {
  if (button.id !== 'enter' && button.id !== 'clear') {
    button.addEventListener('click', () => displayNumber(button.value));
  } else if (button.id === 'enter') {
    button.addEventListener('click', calculate);
  } else if (button.id === 'clear') {
    button.addEventListener('click', clearAll);
  }
});

plus.addEventListener("click", () => displayOperator("+"));
minus.addEventListener("click", () => displayOperator("-"));
multiplier.addEventListener("click", () => displayOperator("x"));
divide.addEventListener("click", () => displayOperator("/"));

clearButton.addEventListener('click', clearAll);