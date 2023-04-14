const display = document.getElementById("display");
const btnSeven = document.getElementById("btnSeven");
const btnEight = document.getElementById("btnEight");
const btnNine = document.getElementById("btnNine");
const btnDivide = document.getElementById("btnDivide");
const btnFour = document.getElementById("btnFour");
const btnFive = document.getElementById("btnFive");
const btnSix = document.getElementById("btnSix");
const btnMultiply = document.getElementById("btnMultiply");
const btnOne = document.getElementById("btnOne");
const btnTwo = document.getElementById("btnTwo");
const btnThree = document.getElementById("btnThree");
const btnSubtract = document.getElementById("btnSubtract");
const btnClear = document.getElementById("btnClear");
const btnZero = document.getElementById("btnZero");
const btnEquals = document.getElementById("btnEquals");
const btnAdd = document.getElementById("btnAdd");
const btnDot = document.getElementById("btnDot");

let a = "";
let oper = "";
let b = "";
let c = "";

function add(a, b) {
  c = a + b;
  a = c;
}

function subtract(a, b) {
  c = a - b;
  a = c;
}

function multiply(a, b) {
  c = a * b;
  a = c;
}

function divide(a, b) {
  c = a / b;
  a = c;
}

if (a === "") {
  btnDivide.disabled = true;
  btnAdd.disabled = true;
  btnSubtract.disabled = true;
  btnMultiply.disabled = true;
}

function operate(oper, a, b) {
  if (oper === "/") {
    divide(+a, +b);
  }
  if (oper === "*") {
    multiply(+a, +b);
  } else if (oper === "-") {
    subtract(+a, +b);
  } else if (oper === "+") {
    add(+a, +b);
  }
}

function eraseResult() {
  if (display.textContent == Number(c)) {
    a = "";
    oper = "";
    b = "";
    c = "";
    display.textContent = "";
  }
}

function ifDivideByZero() {
  if (c === Infinity) {
    a = "";
    oper = "";
    b = "";
    c = "";
    display.textContent = "";
  }
}

function orderOfOperation() {
  if (
    display.textContent === "/" ||
    display.textContent === "-" ||
    display.textContent === "+" ||
    display.textContent === "*"
  ) {
    display.textContent = "";
  }
}

function disableBtns() {
  btnDivide.disabled = false;
  btnAdd.disabled = false;
  btnSubtract.disabled = false;
  btnMultiply.disabled = false;
  if (b != "") {
    btnDot.disabled = false;
  }
}

function ifInfinity() {
  if (c === Infinity) {
    display.textContent = "No can do baby doll";
  }
}

btnSeven.addEventListener("click", () => {
  eraseResult();
  ifDivideByZero();
  if (oper === "") {
    a += "7";
  } else if (c != "" || c === 0) {
    a = c;
  }
  if (a === c) {
    b = "";
    c = "";
  }
  if (oper === "/" || oper === "-" || oper === "+" || oper === "*") {
    b += "7";
  }
  orderOfOperation();
  disableBtns();
  display.textContent += 7;
});

btnEight.addEventListener("click", () => {
  eraseResult();
  ifDivideByZero();
  if (oper === "") {
    a += "8";
  } else if (c != "" || c === 0) {
    a = c;
  }
  if (a === c) {
    b = "";
    c = "";
  }
  if (oper === "/" || oper === "-" || oper === "+" || oper === "*") {
    b += "8";
  }
  orderOfOperation();
  disableBtns();
  display.textContent += 8;
});

btnNine.addEventListener("click", () => {
  eraseResult();
  ifDivideByZero();
  if (oper === "") {
    a += "9";
  } else if (c != "" || c === 0) {
    a = c;
  }
  if (a === c) {
    b = "";
    c = "";
  }
  if (oper === "/" || oper === "-" || oper === "+" || oper === "*") {
    b += "9";
  }
  orderOfOperation();
  disableBtns();
  display.textContent += 9;
});

btnDivide.addEventListener("click", () => {
  if ((+a != "" && +b != "") || a === 0 || b === "0") {
    operate(oper, a, b);
  }
  oper = "/";
  display.textContent = c;
  display.textContent += "/";
  ifInfinity();
});

btnFour.addEventListener("click", () => {
  eraseResult();
  ifDivideByZero();
  if (oper === "") {
    a += "4";
  } else if (c != "" || c === 0) {
    a = c;
  }
  if (a === c) {
    b = "";
    c = "";
  }
  if (oper === "/" || oper === "-" || oper === "+" || oper === "*") {
    b += "4";
  }
  orderOfOperation();
  disableBtns();
  display.textContent += 4;
});

btnFive.addEventListener("click", () => {
  eraseResult();
  ifDivideByZero();
  if (oper === "") {
    a += "5";
  } else if (c != "" || c === 0) {
    a = c;
  }
  if (a === c) {
    b = "";
    c = "";
  }
  if (oper === "/" || oper === "-" || oper === "+" || oper === "*") {
    b += "5";
  }
  orderOfOperation();
  disableBtns();
  display.textContent += 5;
});

btnSix.addEventListener("click", () => {
  eraseResult();
  ifDivideByZero();
  if (oper === "" || c === 0) {
    a += "6";
  } else if (c != "") {
    a = c;
  }
  if (a === c) {
    b = "";
    c = "";
  }
  if (oper === "/" || oper === "-" || oper === "+" || oper === "*") {
    b += "6";
  }
  orderOfOperation();
  disableBtns();
  display.textContent += 6;
});

btnMultiply.addEventListener("click", () => {
  if ((+a != "" && +b != "") || a === 0 || +b === 0) {
    operate(oper, a, b);
  }
  oper = "*";
  display.textContent = c;
  display.textContent += "*";
  ifInfinity();
});

btnOne.addEventListener("click", () => {
  eraseResult();
  ifDivideByZero();
  if (oper === "") {
    a += "1";
  } else if (c != "" || c === 0) {
    a = c;
  }
  if (a === c) {
    b = "";
    c = "";
  }
  if (oper === "/" || oper === "-" || oper === "+" || oper === "*") {
    b += "1";
  }
  orderOfOperation();
  disableBtns();
  display.textContent += 1;
});

btnTwo.addEventListener("click", () => {
  eraseResult();
  ifDivideByZero();
  if (oper === "") {
    a += "2";
  } else if (c != "" || c === 0) {
    a = c;
  }
  if (a === c) {
    b = "";
    c = "";
  }
  if (oper === "/" || oper === "-" || oper === "+" || oper === "*") {
    b += "2";
  }
  orderOfOperation();
  disableBtns();
  display.textContent += 2;
});

btnThree.addEventListener("click", () => {
  eraseResult();
  ifDivideByZero();
  if (oper === "") {
    a += "3";
  } else if (c != "" || c === 0) {
    a = c;
  }
  if (a === c) {
    b = "";
    c = "";
  }
  if (oper === "/" || oper === "-" || oper === "+" || oper === "*") {
    b += "3";
  }
  orderOfOperation();
  disableBtns();
  display.textContent += 3;
});

btnSubtract.addEventListener("click", () => {
  if ((+a != "" && +b != "") || a === 0 || +b === 0) {
    operate(oper, a, b);
  }
  oper = "-";
  display.textContent = c;
  display.textContent += "-";
  ifInfinity();
});

btnClear.addEventListener("click", () => {
  a = "";
  b = "";
  oper = "";
  c = "";
  display.textContent = "";
});

btnZero.addEventListener("click", () => {
  eraseResult();
  ifDivideByZero();
  if (oper === "") {
    a += "0";
  } else if (c != "" || c === 0) {
    a = c;
  }
  if (a === c) {
    b = "";
    c = "";
  }

  if (oper === "/" || oper === "-" || oper === "+" || oper === "*") {
    b += "0";
  }
  orderOfOperation();
  disableBtns();
  display.textContent += 0;
});

btnEquals.addEventListener("click", () => {
  operate(oper, a, b);
  btnDivide.disabled = true;
  btnAdd.disabled = true;
  btnSubtract.disabled = true;
  btnMultiply.disabled = true;
  display.textContent = c;
  ifInfinity();
});

btnAdd.addEventListener("click", () => {
  if ((+a != "" && +b != "") || a === 0 || +b === 0) {
    operate(oper, a, b);
  }
  oper = "+";
  display.textContent = c;
  display.textContent += "+";
  ifInfinity();
});

btnDot.addEventListener("click", () => {
  if (oper === "") {
    a += ".";
  }
  if (oper === "/" || oper === "-" || oper === "+" || oper === "*") {
    b += ".";
  }
  btnDot.disabled = true;
  display.textContent += ".";
});
