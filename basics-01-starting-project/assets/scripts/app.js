const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInputNumber() {
    return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

/* takes input from add function that added as params in writeToLog funct */
function writeToLog(operationIdentifier, prevResult, operationNumber, newResult ){
    /* getting dynamic data from writeToLog function params and builds objects */
const logEntry = {
    operation: operationIdentifier,
    preResult: prevResult,
    number: operationNumber,
    result: newResult
};
logEntries.push(logEntry);
console.log(logEntries);
    
}

function add() {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber; 
    createAndWriteOutput('+', initialResult, enteredNumber);
    /* reusable function and passing data to write to log params..here these param data is formed after all the above calculations*/
    writeToLog('ADD', initialResult,enteredNumber, currentResult);
}

function subtract() {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('Subtract', initialResult, enteredNumber, currentResult);

}

function multiply() {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('Multiply', initialResult, enteredNumber, currentResult);
}
function divide() {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('Divide', initialResult, enteredNumber, currentResult);
}

/* listners and calling functions */
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);