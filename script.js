const calculatorForm = document.querySelector(".calculator form");
const resultField = document.getElementById("result");
let calculatedText = "";

calculatorForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

const updateResultField = () => {
  resultField.value = calculatedText;
};

const isOperatorNotAlreadyApplied = () => {
  return /^[0-9]*$/.test(calculatedText);
};

const isNumber = (text) => {
  return /^[0-9]*$/.test(text);
};
updateResultField();

const onClickActionButton = (action, calculatedText) => {
  if (!isNumber(calculatedText[calculatedText.length - 1])) {
    calculatedText[calculatedText.length - 1] = action;
  } else {
    calculatedText = isOperatorNotAlreadyApplied()
      ? calculatedText
      : eval(calculatedText);
    calculatedText = calculatedText + action;
  }
  return calculatedText;
};

calculatorForm.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    switch (e.target.dataset.action) {
      case "add": {
        if (calculatedText === "") return;
        calculatedText = onClickActionButton("+", calculatedText);
        break;
      }
      case "sub": {
        if (calculatedText === "") return;
        calculatedText = onClickActionButton("-", calculatedText);
        break;
      }
      case "multiply": {
        if (calculatedText === "") return;
        calculatedText = onClickActionButton("*", calculatedText);
        break;
      }
      case "divide": {
        if (calculatedText === "") return;
        calculatedText = onClickActionButton("/", calculatedText);
        break;
      }
      case "=": {
        if (calculatedText === "") return;
        calculatedText = isOperatorNotAlreadyApplied()
          ? calculatedText.substring(0, calculatedText.length)
          : calculatedText;
        calculatedText = eval(calculatedText);

        break;
      }
      case "cc":
        calculatedText = "";
        break;
      default:
        calculatedText = calculatedText + e.target.dataset.action;
    }

    updateResultField();
  }
});
