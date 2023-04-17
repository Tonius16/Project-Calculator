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
const btnErase = document.getElementById("btnErase");

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

function disableBtns() {
  btnDivide.disabled = true;
  btnAdd.disabled = true;
  btnSubtract.disabled = true;
  btnMultiply.disabled = true;
  btnDot.disabled = true;
}

btnErase.disabled = true;
btnEquals.disabled = true;

disableBtns();

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
  if (a === "" && oper === "" && b === "" && c === "") {
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

function enableBtns() {
  btnDivide.disabled = false;
  btnAdd.disabled = false;
  btnSubtract.disabled = false;
  btnMultiply.disabled = false;
  btnErase.disabled = false;
  btnDot.disabled = false;
  btnEquals.disabled = false;
  for (let i = 0; i < a.length; i++) {
    if (a.charAt(i) === ".") {
      btnDot.disabled = true;
    }
  }
  if (b != "") {
    btnDot.disabled = false;
  }
  for (let i = 0; i < b.length; i++) {
    if (b.charAt(i) === ".") {
      btnDot.disabled = true;
    }
  }
}

function ifInfinity() {
  if (c === Infinity) {
    display.textContent = "No can do baby doll";
  }
}

display.textContent = "0";

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
  enableBtns();
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
  enableBtns();
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
  enableBtns();
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
  disableBtns();
  btnEquals.disabled = true;
  btnErase.disabled = true;
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
  enableBtns();
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
  enableBtns();
  display.textContent += 5;
});

btnSix.addEventListener("click", () => {
  eraseResult();
  ifDivideByZero();
  if (oper === "") {
    a += "6";
  } else if (c != "" || c === 0) {
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
  enableBtns();
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
  disableBtns();
  btnEquals.disabled = true;
  btnErase.disabled = true;
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
  enableBtns();
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
  enableBtns();
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
  enableBtns();
  display.textContent += 3;
  console.log(a, b);
});

btnSubtract.addEventListener("click", () => {
  if ((+a != "" && +b != "") || a === 0 || +b === 0) {
    operate(oper, a, b);
  }
  oper = "-";
  display.textContent = c;
  display.textContent += "-";
  ifInfinity();
  disableBtns();
  btnEquals.disabled = true;
  btnErase.disabled = true;
});

btnClear.addEventListener("click", () => {
  a = "";
  b = "";
  oper = "";
  c = "";
  btnErase.disabled = false;
  display.textContent = "0";
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
  enableBtns();
  if (display.textContent === "0") {
    display.textContent = "0";
  } else {
    display.textContent += "0";
  }
});

btnEquals.addEventListener("click", () => {
  operate(oper, a, b);
  disableBtns();
  btnErase.disabled = true;
  display.textContent = c;
  if (display.textContent == Number(c)) {
    a = "";
    oper = "";
    b = "";
    c = "";
  }
  ifInfinity();
  btnEquals.disabled = true;
});

btnAdd.addEventListener("click", () => {
  if ((+a != "" && +b != "") || a === 0 || +b === 0) {
    operate(oper, a, b);
  }
  oper = "+";
  display.textContent = c;
  display.textContent += "+";
  ifInfinity();
  disableBtns();
  btnEquals.disabled = true;
  btnErase.disabled = true;
});

btnDot.addEventListener("click", () => {
  if (oper === "") {
    a += ".";
  }
  if (oper === "/" || oper === "-" || oper === "+" || oper === "*") {
    b += ".";
  }
  for (let i = 0; i < a.length; i++) {
    if (a.charAt(i) === ".") {
      btnDot.disabled = true;
    }
  }
  for (let i = 0; i < b.length; i++) {
    if (b.charAt(i) === ".") {
      btnDot.disabled = true;
    }
  }
  display.textContent += ".";
});

btnErase.addEventListener("click", () => {
  if (b === "" && a != "") {
    oper = oper.substring(0, oper.length - 1);
    display.textContent = oper;
  }
  if (oper === "/" || oper === "-" || oper === "+" || oper === "*") {
    if (b != "") {
      b = b.substring(0, b.length - 1);
      display.textContent = display.textContent.substring(
        0,
        display.textContent.length - 1
      );
    }
    if (b === "") {
      display.textContent = oper;
    }
  }
  if (oper === "") {
    display.textContent = a;
    a = a.substring(0, a.length - 1);
    display.textContent = display.textContent.substring(
      0,
      display.textContent.length - 1
    );
    if (a === "") {
      display.textContent = "0";
    }
  }
  console.log(a, oper, b, c);
});
