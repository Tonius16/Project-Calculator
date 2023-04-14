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

//na klik druge radnje nakon sta je b nula a dilimo s njin izbaci ne

function add(a, b) {
  c = a + b;
  a = c;
  console.log(a);
}

function subtract(a, b) {
  c = a - b;
  a = +c;
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

let a = "";
let oper = "";
let b = "";
let c = "";
let d = "";

if (a === "") {
  btnDivide.disabled = true;
}

function operate(oper, a, b) {
  if (oper === "/" && b === "0") {
    display.textContent = "LOL";
    console.log(display.textContent);
  } else if (oper === "/") {
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
  if (oper === "") {
    a += "7";
  } else if (c != "" || c === 0) {
    a = c;
  }
  if (a === c) {
    b = "";
    c = "";
  }
  if (display.textContent === c) {
    c = "";
    display.textContent = "";
    console.log(":asd");
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
  display.textContent += 7;
  console.log(a, b);
});

btnEight.addEventListener("click", () => {
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
  display.textContent += 8;
  console.log(a, b);
});

btnNine.addEventListener("click", () => {
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
  display.textContent += 9;
  console.log(a, b, d);
});

btnDivide.addEventListener("click", () => {
  if ((+a != "" && +b != "") || a === 0 || b === "0") {
    operate(oper, a, b);
  }
  oper = "/";
  display.textContent = "/";
  console.log(oper);
});

btnFour.addEventListener("click", () => {
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
  display.textContent += 4;
  console.log(a, b, d);
});

btnFive.addEventListener("click", () => {
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
  display.textContent += 5;
  console.log(a, b, d);
});

btnSix.addEventListener("click", () => {
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
  display.textContent += 6;
  console.log(a, b, d);
});

btnMultiply.addEventListener("click", () => {
  if ((+a != "" && +b != "") || +a === 0 || +b === 0) {
    operate(oper, a, b);
  }
  oper = "*";
  display.textContent = "*";
  console.log(oper);
});

btnOne.addEventListener("click", () => {
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
  display.textContent += 1;
  console.log(a, b, d);
});

btnTwo.addEventListener("click", () => {
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
  display.textContent += 2;
  console.log(a, b, d);
});

btnThree.addEventListener("click", () => {
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
  display.textContent += 3;
  console.log(a, b, d);
});

btnSubtract.addEventListener("click", () => {
  if ((+a != "" && +b != "") || +a === 0 || +b === 0) {
    operate(oper, a, b);
  }
  oper = "-";
  display.textContent = "-";
  console.log(oper);
});

btnClear.addEventListener("click", () => {
  a = "";
  b = "";
  oper = "";
  c = "";
  display.textContent = "";
  console.log(a, b, c);
});

btnZero.addEventListener("click", () => {
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
  display.textContent += 0;
  console.log(a, b, d);
});

btnEquals.addEventListener("click", () => {
  operate(oper, a, b);
  a = "";
  oper = "";
  b = "";
  c = "";
  display.textContent = c;
});

btnAdd.addEventListener("click", () => {
  if ((+a != "" && +b != "") || a === 0 || +b === 0) {
    operate(oper, a, b);
  }
  oper = "+";
  display.textContent = "+";
  console.log(oper);
});
