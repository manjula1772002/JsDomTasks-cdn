// display
const display = document.getElementById("display");

// Btn
const numberBtns = document.querySelectorAll(".btnNum");
const operatorBtns = document.querySelectorAll(".operator");
const clearAllBtn = document.getElementById("clearOperands");
const backspaceBtn = document.querySelector(".clear");
const equalBtn = document.querySelector(".equal");
const dotBtn = document.querySelector(".dot");
const bracketBtns = document.querySelectorAll(".btnStyle");

let expression = "";

// Number button
numberBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (display.textContent === "0") {
      expression = btn.textContent;
    } else {
      expression += btn.textContent;
    }
    display.textContent = expression;
  });
});

// logical
operatorBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    expression += btn.textContent;
    display.textContent = expression;
  });
});

// ( )
bracketBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    expression += btn.textContent;
    display.textContent = expression;
  });
});

// Dot
dotBtn.addEventListener("click", () => {
  expression += ".";
  display.textContent = expression;
});

// Clear all
clearAllBtn.addEventListener("click", () => {
  expression = "";
  display.textContent = "0";
});

// delete(x)
backspaceBtn.addEventListener("click", () => {
  expression = expression.slice(0, -1);
  display.textContent = expression || "0";
});

equalBtn.addEventListener("click", () => {
  if (expression === "") {
    alert("Please enter a value");
    return;
  }

  try {
    expression = eval(expression);
    display.textContent = expression;
  } catch {
    alert("Error");
    expression = "";
    display.textContent = "0";
  }
});



