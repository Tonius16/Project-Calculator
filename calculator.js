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

function operate(oper, a, b) {
  if (oper === "/") {
    divide(+a, +b);
  } else if (oper === "*") {
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

  if (oper === "/" || oper === "-" || oper === "+" || oper === "*") {
    b += "7";
  }

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
  console.log(a, b);
  display.textContent += 8;
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
  console.log(a, b, d);
  display.textContent += 9;
});

btnDivide.addEventListener("click", () => {
  if ((+a != "" && +b != "") || a === 0) {
    operate(oper, a, b);
  }
  oper = "/";
  display.textContent = "/";
  if (b === "0") {
    display.textContent = "LOL";
  }
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
  console.log(a, b, d);
  display.textContent += 4;
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
  console.log(a, b, d);
  display.textContent += 5;
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
  console.log(a, b, d);
  display.textContent += 6;
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
  console.log(a, b, d);
  display.textContent += 1;
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
  console.log(a, b, d);
  display.textContent += 2;
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
  console.log(a, b, d);
  display.textContent += 3;
});

btnSubtract.addEventListener("click", () => {
  if ((+a != "" && +b != "") || +a === 0 || +b === 0) {
    operate(oper, a, b);
  }
  oper = "-";
  display.textContent = "-";
  console.log(oper);
});

btnClear.addEventListener("click", () => {});

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
  console.log(a, b, d);
  display.textContent += 0;
});

btnEquals.addEventListener("click", () => {});

btnAdd.addEventListener("click", () => {
  if ((+a != "" && +b != "") || a === 0 || +b === 0) {
    operate(oper, a, b);
  }
  oper = "+";
  display.textContent = "+";
  console.log(oper);
});
