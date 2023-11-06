class Calculator {
  constructor(input, output) {
    this.inputDisplay = input;
    this.outputDisplay = output;
    this.percentToggle = true;
    this.inputHistory = [];
  }

  clear() {
    this.inputHistory = [];
    this.updateInputDisplay();
    this.updateOutputDisplay("0");
  }

  delete() {
    switch (this.getLastInputType()) {
      case "number":
        if (this.getLastInputValue().length > 1) {
          this.editLastInput(this.getLastInputValue().slice(0, -1), "number");
        } else {
          this.deleteLastInput();
        }
        break;
      case "operator":
        this.deleteLastInput();
        break;
      default:
        return;
    }
  }

  changePersentToDecimal() {
    if (this.getLastInputType() === "number") {
      if (this.percentToggle === true) {
        this.editLastInput(this.getLastInputValue() / 100, "number");
        this.percentToggle = false;
      } else {
        this.editLastInput(this.getLastInputValue() * 100, "number");
        this.percentToggle = true;
      }
    }
  }

  insertNumber(value) {
    if (this.getLastInputType() === "number") {
      this.appendToLastInput(value);
    } else if (
      this.getLastInputType() === "operator" ||
      this.getLastInputType() === null
    ) {
      this.addNewInput(value, "number");
    }
  }

  insertOperation(value) {
    switch (this.getLastInputType()) {
      case "number":
        this.addNewInput(value, "operator");
        break;
      case "operator":
        this.editLastInput(value, "operator");
        break;
      case "equals":
        let output = this.getOutputValue();
        this.clearAllHistory();
        this.addNewInput(output, "number");
        this.addNewInput(value, "operator");
        break;
      default:
        return;
    }
  }

  negateNumber() {
    if (this.getLastInputType() === "number") {
      this.editLastInput(parseFloat(this.getLastInputValue()) * -1, "number");
    }
  }

  insertDecimalPoint() {
    if (
      this.getLastInputType() === "number" &&
      !this.getLastInputValue().includes(".")
    ) {
      this.appendToLastInput(".");
    } else if (
      this.getLastInputType() === "operator" ||
      this.getLastInputType() === null
    ) {
      this.addNewInput("0.", "number");
    }
  }

  generateResult() {
    if (this.getLastInputType() === "number") {
      const self = this;

      const simplifyExpression = function (currentExperssion, operator) {
        if (currentExperssion.indexOf(operator) === -1) {
          return currentExperssion;
        } else {
          let operatorIdx = currentExperssion.indexOf(operator);
          let leftOperandIdx = operatorIdx - 1;
          let rightOperandIdx = operatorIdx + 1;

          let partialSolution = self.performOperation(
            ...currentExperssion.slice(leftOperandIdx, rightOperandIdx + 1)
          );

          currentExperssion.splice(
            leftOperandIdx,
            3,
            partialSolution.toString()
          );

          return simplifyExpression(currentExperssion, operator);
        }
      };
      let result = ["/", "*", "+", "-"].reduce(
        simplifyExpression,
        this.getAllInputValues()
      );

      this.inputHistory.push({
        type: "number",
        value: Number(result).toLocaleString(),
      });

      this.inputHistory = this.inputHistory.splice(
        this.inputHistory.length - 1,
        1
      );

      this.updateOutputDisplay(result.toString());
    }
  }

  getLastInputType() {
    return this.inputHistory.length === 0
      ? null
      : this.inputHistory[this.inputHistory.length - 1].type;
  }

  getLastInputValue() {
    return this.inputHistory.length === 0
      ? null
      : this.inputHistory[this.inputHistory.length - 1].value;
  }

  getAllInputValues() {
    return this.inputHistory.map((entry) => entry.value);
  }

  getOutputValue() {
    return this.outputDisplay.value.replace(/,/g, "");
  }

  addNewInput(value, type) {
    this.inputHistory.push({ type: type, value: value.toString() });
    this.updateInputDisplay();
  }

  appendToLastInput(value) {
    this.inputHistory[this.inputHistory.length - 1].value += value.toString();
    this.updateInputDisplay();
  }

  editLastInput(value, type) {
    this.inputHistory.pop();
    this.addNewInput(value, type);
  }

  deleteLastInput() {
    this.inputHistory.pop();
    this.updateInputDisplay();
  }

  updateInputDisplay() {
    this.inputDisplay.value = this.getAllInputValues().join("");
  }

  updateOutputDisplay(value) {
    this.outputDisplay.value = Number(value).toLocaleString();
  }

  performOperation(leftOperand, operator, rightOperand) {
    leftOperand = parseFloat(leftOperand);
    rightOperand = parseFloat(rightOperand);

    if (isNaN(leftOperand) || isNaN(rightOperand)) return;

    switch (operator) {
      case "*":
        return leftOperand * rightOperand;
      case "/":
        return leftOperand / rightOperand;
      case "+":
        return leftOperand + rightOperand;
      case "-":
        return leftOperand - rightOperand;
      default:
        return;
    }
  }
}

const inputDisplay = document.querySelector(".history");
const outputDisplay = document.querySelector(".result");

const clearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const percentButton = document.querySelector("[data-percent]");
const operationButtons = document.querySelectorAll("[data-operator]");
const numberButtons = document.querySelectorAll("[data-number]");
const negationButton = document.querySelector("[data-negation]");
const decimalButton = document.querySelector("[data-decimal]");
const equalsButton = document.querySelector("[data-equals]");

const calculator = new Calculator(inputDisplay, outputDisplay);

clearButton.addEventListener("click", () => {
  calculator.clear();
});

deleteButton.addEventListener("click", () => {
  calculator.delete();
});

percentButton.addEventListener("click", () => {
  calculator.changePersentToDecimal();
});

operationButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let { target } = event;
    calculator.insertOperation(target.dataset.operator);
  });
});

numberButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let { target } = event;
    calculator.insertNumber(target.dataset.number);
  });
});

negationButton.addEventListener("click", () => {
  calculator.negateNumber();
});

decimalButton.addEventListener("click", () => {
  calculator.insertDecimalPoint();
});

equalsButton.addEventListener("click", () => {
  calculator.generateResult();
});
