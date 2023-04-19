//fetching all required html elements
const body = document.getElementById("body");
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

//setting four empty string variables to use in the operations
let a = "";
let oper = "";
let b = "";
let c = "";

//creating functions for all four basic operations
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

//function that disables some buttons when needed
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

/*function that takes three parameters and uses them in an operation under conditions,
 that depend on the oper variable*/
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

//erasing the result on the display under a condition
function eraseResult() {
  if (a === "" && oper === "" && b === "" && c === "") {
    display.textContent = "";
  }
}

//returning the calculator to default if the result is infinity
function ifDivideByZero() {
  if (c === Infinity) {
    a = "";
    oper = "";
    b = "";
    c = "";
    display.textContent = "";
  }
}

//displaying values one at a time
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

//when called will enable some buttons exept the dot which depends on a condition
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

//displaying a message if dividing by zero
function ifInfinity() {
  if (c === Infinity) {
    display.textContent = "No can do baby doll";
  }
}

//after clicking equals the next number click empties all values
function emptyAfterEquals() {
  if (display.textContent == Number(c)) {
    a = "";
    oper = "";
    b = "";
    c = "";
    display.textContent = "";
  }
}

/*when a number button is clicked update the a or b variable acording to the,
argument that is being sent, all happening under some conditions*/
function onBtnClick(firstNum, secondNum) {
  if (oper === "") {
    a += firstNum;
  } else if (c != "" || c === 0) {
    a = c; //when c exists or c is equal to zero c becomes the value of a
  }
  if (a === c) {
    b = ""; //if the above else if statement is true empty the b and c variables
    c = ""; //which leaves us with the operator and a new value of a for use in further operations
  }
  if (oper === "/" || oper === "-" || oper === "+" || oper === "*") {
    b += secondNum;
  }
}

display.textContent = "0";

//calling functions defined above on click of a number button
btnSeven.addEventListener("click", () => {
  eraseResult();
  ifDivideByZero();
  emptyAfterEquals();
  onBtnClick("7", "7");
  orderOfOperation();
  enableBtns();
  display.textContent += 7;
});

btnEight.addEventListener("click", () => {
  eraseResult();
  ifDivideByZero();
  emptyAfterEquals();
  onBtnClick("8", "8");
  orderOfOperation();
  enableBtns();
  display.textContent += 8;
});

btnNine.addEventListener("click", () => {
  eraseResult();
  ifDivideByZero();
  emptyAfterEquals();
  onBtnClick("9", "9");
  orderOfOperation();
  enableBtns();
  display.textContent += 9;
});

/*calling the operate funcion under a condition, also calling some other ones
and passing a value to the oper variable*/
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
  emptyAfterEquals();
  onBtnClick("4", "4");
  orderOfOperation();
  enableBtns();
  display.textContent += 4;
});

btnFive.addEventListener("click", () => {
  eraseResult();
  ifDivideByZero();
  emptyAfterEquals();
  onBtnClick("5", "5");
  orderOfOperation();
  enableBtns();
  display.textContent += 5;
});

btnSix.addEventListener("click", () => {
  eraseResult();
  ifDivideByZero();
  emptyAfterEquals();
  onBtnClick("6", "6");
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
  emptyAfterEquals();
  onBtnClick("1", "1");
  orderOfOperation();
  enableBtns();
  display.textContent += 1;
});

btnTwo.addEventListener("click", () => {
  eraseResult();
  ifDivideByZero();
  emptyAfterEquals();
  onBtnClick("2", "2");
  orderOfOperation();
  enableBtns();
  display.textContent += 2;
});

btnThree.addEventListener("click", () => {
  eraseResult();
  ifDivideByZero();
  emptyAfterEquals();
  onBtnClick("3", "3");
  orderOfOperation();
  enableBtns();
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
  disableBtns();
  btnEquals.disabled = true;
  btnErase.disabled = true;
});

//if the clear button is clicked empty all variables
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
  emptyAfterEquals();
  onBtnClick("0", "0");
  orderOfOperation();
  enableBtns();

  if (display.textContent === "0") {
    display.textContent = "0";
  } else {
    display.textContent += "0";
  }
});

/*if the equals button is clicked calculate the numbers, display result and,
empty all variables exept c so we can continue to work with it*/
btnEquals.addEventListener("click", () => {
  operate(oper, a, b);
  btnErase.disabled = true;
  display.textContent = c;
  if (display.textContent == Number(c)) {
    a = "";
    oper = "";
    b = "";
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

/*we are adding a decimal point to the numbers that depend on some conditions,
and each time we are going through the number in a loop checking if 
a decimal point already exists. If it does disable the dot button*/
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

/*when the erase button is clicked we are checking some conditions and depending on them
remove the last digit of the number*/
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
});

//add some basic keyboard support, doing the same things as on the mouse listeners above
body.addEventListener(
  "keydown",
  (event) => {
    let name = event.key;
    let code = event.code;
    if (code === "Numpad7") {
      eraseResult();
      ifDivideByZero();
      emptyAfterEquals();
      onBtnClick("7", "7");
      orderOfOperation();
      enableBtns();
      display.textContent += 7;
    }
    if (code === "Numpad8") {
      eraseResult();
      ifDivideByZero();
      emptyAfterEquals();
      onBtnClick("8", "8");
      orderOfOperation();
      enableBtns();
      display.textContent += 8;
    }
    if (code === "Numpad9") {
      eraseResult();
      ifDivideByZero();
      emptyAfterEquals();
      onBtnClick("9", "9");
      orderOfOperation();
      enableBtns();
      display.textContent += 9;
    }
    if (code === "Numpad4") {
      eraseResult();
      ifDivideByZero();
      emptyAfterEquals();
      onBtnClick("4", "4");
      orderOfOperation();
      enableBtns();
      display.textContent += 4;
    }
    if (code === "Numpad5") {
      eraseResult();
      ifDivideByZero();
      emptyAfterEquals();
      onBtnClick("5", "5");
      orderOfOperation();
      enableBtns();
      display.textContent += 5;
    }
    if (code === "Numpad6") {
      eraseResult();
      ifDivideByZero();
      emptyAfterEquals();
      onBtnClick("6", "6");
      orderOfOperation();
      enableBtns();
      display.textContent += 6;
    }
    if (code === "Numpad1") {
      eraseResult();
      ifDivideByZero();
      emptyAfterEquals();
      onBtnClick("1", "1");
      orderOfOperation();
      enableBtns();
      display.textContent += 1;
    }
    if (code === "Numpad2") {
      eraseResult();
      ifDivideByZero();
      emptyAfterEquals();
      onBtnClick("2", "2");
      orderOfOperation();
      enableBtns();
      display.textContent += 2;
    }
    if (code === "Numpad3") {
      eraseResult();
      ifDivideByZero();
      emptyAfterEquals();
      onBtnClick("3", "3");
      orderOfOperation();
      enableBtns();
      display.textContent += 3;
    }
    if (code === "Numpad0") {
      eraseResult();
      ifDivideByZero();
      emptyAfterEquals();
      onBtnClick("0", "0");
      orderOfOperation();
      enableBtns();
      display.textContent += 0;
    }
    if (code === "NumpadDivide") {
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
    }
    if (code === "NumpadMultiply") {
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
    }
    if (code === "NumpadSubtract") {
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
    }
    if (code === "NumpadAdd") {
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
    }
    if (code === "NumpadEnter") {
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
    }
    if (code === "NumpadDecimal") {
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
    }
  },
  false
);
