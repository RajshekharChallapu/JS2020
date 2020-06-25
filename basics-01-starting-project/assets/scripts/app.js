const defaultResult = 0;
let currentResult = defaultResult;

function getUserInputNumber() {
    return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);

}

function add() {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    /* alternative way */
    //currentResult +=  enteredNumber;
    /* increment */
    //currentResult++; 
    createAndWriteOutput('+', initialResult, enteredNumber);
}

function subtract() {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
}
function divide() {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
}

/* listners and calling functions */
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);