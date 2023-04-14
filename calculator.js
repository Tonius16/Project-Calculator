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
  console.log(a);
}

function subtract(a, b) {
  c = a - b;
  a = c;
  console.log(a);
}

function multiply(a, b) {
  c = a * b;
  a = c;
  console.log(a);
}

function divide(a, b) {
  c = a / b;
  a = c;
  console.log(a);
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

btnSeven.addEventListener("click", () => {
  if (display.textContent == Number(c)) {
    a = "";
    oper = "";
    b = "";
    c = "";
    display.textContent = "";
  }
  if (c === Infinity) {
    a = "";
    oper = "";
    b = "";
    c = "";
    display.textContent = "";
  }
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
  if (
    display.textContent === "/" ||
    display.textContent === "-" ||
    display.textContent === "+" ||
    display.textContent === "*"
  ) {
    display.textContent = "";
  }
  btnDivide.disabled = false;
  btnAdd.disabled = false;
  btnSubtract.disabled = false;
  btnMultiply.disabled = false;
  if (b != "" && btnDot.disabled === true) {
    btnDot.disabled = false;
  }
  display.textContent += 7;
  console.log(a, b);
});

btnEight.addEventListener("click", () => {
  if (display.textContent == Number(c)) {
    a = "";
    oper = "";
    b = "";
    c = "";
    display.textContent = "";
  }
  if (c === Infinity) {
    a = "";
    oper = "";
    b = "";
    c = "";
    display.textContent = "";
  }
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
  if (
    display.textContent === "/" ||
    display.textContent === "-" ||
    display.textContent === "+" ||
    display.textContent === "*"
  ) {
    display.textContent = "";
  }
  btnDivide.disabled = false;
  btnAdd.disabled = false;
  btnSubtract.disabled = false;
  btnMultiply.disabled = false;
  if (b != "") {
    btnDot.disabled = false;
  }
  display.textContent += 8;
  console.log(a, b);
});

btnNine.addEventListener("click", () => {
  if (display.textContent == Number(c)) {
    a = "";
    oper = "";
    b = "";
    c = "";
    display.textContent = "";
  }
  if (c === Infinity) {
    a = "";
    oper = "";
    b = "";
    c = "";
    display.textContent = "";
  }
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
  if (
    display.textContent === "/" ||
    display.textContent === "-" ||
    display.textContent === "+" ||
    display.textContent === "*"
  ) {
    display.textContent = "";
  }
  btnDivide.disabled = false;
  btnAdd.disabled = false;
  btnSubtract.disabled = false;
  btnMultiply.disabled = false;
  if (b != "") {
    btnDot.disabled = false;
  }
  display.textContent += 9;
  console.log(a, b);
});

btnDivide.addEventListener("click", () => {
  if ((+a != "" && +b != "") || a === 0 || b === "0") {
    operate(oper, a, b);
  }
  oper = "/";
  display.textContent = c;
  display.textContent += "/";
  if (c === Infinity) {
    display.textContent = "No can do baby doll";
  }
  console.log(oper);
});

btnFour.addEventListener("click", () => {
  if (display.textContent == Number(c)) {
    a = "";
    oper = "";
    b = "";
    c = "";
    display.textContent = "";
  }
  if (c === Infinity) {
    a = "";
    oper = "";
    b = "";
    c = "";
    display.textContent = "";
  }
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
  if (
    display.textContent === "/" ||
    display.textContent === "-" ||
    display.textContent === "+" ||
    display.textContent === "*"
  ) {
    display.textContent = "";
  }
  btnDivide.disabled = false;
  btnAdd.disabled = false;
  btnSubtract.disabled = false;
  btnMultiply.disabled = false;
  if (b != "") {
    btnDot.disabled = false;
  }
  display.textContent += 4;
  console.log(a, b);
});

btnFive.addEventListener("click", () => {
  if (display.textContent == Number(c)) {
    a = "";
    oper = "";
    b = "";
    c = "";
    display.textContent = "";
  }
  if (c === Infinity) {
    a = "";
    oper = "";
    b = "";
    c = "";
    display.textContent = "";
  }
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
  if (
    display.textContent === "/" ||
    display.textContent === "-" ||
    display.textContent === "+" ||
    display.textContent === "*"
  ) {
    display.textContent = "";
  }
  btnDivide.disabled = false;
  btnAdd.disabled = false;
  btnSubtract.disabled = false;
  btnMultiply.disabled = false;
  if (b != "") {
    btnDot.disabled = false;
  }
  display.textContent += 5;
  console.log(a, b);
});

btnSix.addEventListener("click", () => {
  if (display.textContent == Number(c)) {
    a = "";
    oper = "";
    b = "";
    c = "";
    display.textContent = "";
  }
  if (c === Infinity) {
    a = "";
    oper = "";
    b = "";
    c = "";
    display.textContent = "";
  }
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
  if (
    display.textContent === "/" ||
    display.textContent === "-" ||
    display.textContent === "+" ||
    display.textContent === "*"
  ) {
    display.textContent = "";
  }
  btnDivide.disabled = false;
  btnAdd.disabled = false;
  btnSubtract.disabled = false;
  btnMultiply.disabled = false;
  if (b != "") {
    btnDot.disabled = false;
  }
  display.textContent += 6;
  console.log(a, b);
});

btnMultiply.addEventListener("click", () => {
  if ((+a != "" && +b != "") || a === 0 || +b === 0) {
    operate(oper, a, b);
  }
  oper = "*";
  display.textContent = c;
  display.textContent += "*";
  if (c === Infinity) {
    display.textContent = "No can do baby doll";
  }
  console.log(oper);
});

btnOne.addEventListener("click", () => {
  if (display.textContent == Number(c)) {
    a = "";
    oper = "";
    b = "";
    c = "";
    display.textContent = "";
  }
  if (c === Infinity) {
    a = "";
    oper = "";
    b = "";
    c = "";
    display.textContent = "";
  }
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
  if (
    display.textContent === "/" ||
    display.textContent === "-" ||
    display.textContent === "+" ||
    display.textContent === "*"
  ) {
    display.textContent = "";
  }
  btnDivide.disabled = false;
  btnAdd.disabled = false;
  btnSubtract.disabled = false;
  btnMultiply.disabled = false;
  if (b != "") {
    btnDot.disabled = false;
  }
  display.textContent += 1;
  console.log(a, b);
});

btnTwo.addEventListener("click", () => {
  if (display.textContent == Number(c)) {
    a = "";
    oper = "";
    b = "";
    c = "";
    display.textContent = "";
  }
  if (c === Infinity) {
    a = "";
    oper = "";
    b = "";
    c = "";
    display.textContent = "";
  }
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
  if (
    display.textContent === "/" ||
    display.textContent === "-" ||
    display.textContent === "+" ||
    display.textContent === "*"
  ) {
    display.textContent = "";
  }
  btnDivide.disabled = false;
  btnAdd.disabled = false;
  btnSubtract.disabled = false;
  btnMultiply.disabled = false;
  if (b != "") {
    btnDot.disabled = false;
  }
  display.textContent += 2;
  console.log(a, b);
});

btnThree.addEventListener("click", () => {
  if (display.textContent == Number(c)) {
    a = "";
    oper = "";
    b = "";
    c = "";
    display.textContent = "";
  }
  if (c === Infinity) {
    a = "";
    oper = "";
    b = "";
    c = "";
    display.textContent = "";
  }
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
  if (
    display.textContent === "/" ||
    display.textContent === "-" ||
    display.textContent === "+" ||
    display.textContent === "*"
  ) {
    display.textContent = "";
  }
  btnDivide.disabled = false;
  btnAdd.disabled = false;
  btnSubtract.disabled = false;
  btnMultiply.disabled = false;
  if (b != "") {
    btnDot.disabled = false;
  }
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
  if (c === Infinity) {
    display.textContent = "No can do baby doll";
  }
  console.log(oper);
});

btnClear.addEventListener("click", () => {
  a = "";
  b = "";
  oper = "";
  c = "";
  display.textContent = "";
});

btnZero.addEventListener("click", () => {
  if (display.textContent == Number(c)) {
    a = "";
    oper = "";
    b = "";
    c = "";
    display.textContent = "";
  }
  if (c === Infinity) {
    a = "";
    oper = "";
    b = "";
    c = "";
    display.textContent = "";
  }
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
  if (
    display.textContent === "/" ||
    display.textContent === "-" ||
    display.textContent === "+" ||
    display.textContent === "*"
  ) {
    display.textContent = "";
  }
  btnDivide.disabled = false;
  btnAdd.disabled = false;
  btnSubtract.disabled = false;
  btnMultiply.disabled = false;
  if (b != "") {
    btnDot.disabled = false;
  }
  display.textContent += 0;
  console.log(a, b);
});

btnEquals.addEventListener("click", () => {
  operate(oper, a, b);
  btnDivide.disabled = true;
  btnAdd.disabled = true;
  btnSubtract.disabled = true;
  btnMultiply.disabled = true;
  display.textContent = c;
  if (c === Infinity) {
    display.textContent = "No can do baby doll";
  }
  if (c === NaN) {
    display.textContent = "What did you do buddy?";
  }
});

btnAdd.addEventListener("click", () => {
  if ((+a != "" && +b != "") || a === 0 || +b === 0) {
    operate(oper, a, b);
  }
  oper = "+";
  display.textContent = c;
  display.textContent += "+";
  console.log(oper);
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
