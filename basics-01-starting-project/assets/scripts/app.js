const defaultResult = 10;
let currentResult = defaultResult;

function getUserInputNumber() {
    return parseInt(usrInput.value);
}

/* called by add function and takes params data from that func and stroing into new variable and printing o/p result */
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);

}

function add() {
    /* stores the function value and calling function..getUserInputNumber func do the coversion and returns the value */
    const enteredNumber = getUserInputNumber();
    /* storing currentresult value */
    const initialResult = currentResult;
    /* calculation of current value and user entered number*/
    currentResult = currentResult + enteredNumber;
    /* calling new function with params within the function  */
    createAndWriteOutput('+', initialResult, enteredNumber);
}

function subtract() {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
}
function divide() {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
}

/* listners and calling functions */
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);