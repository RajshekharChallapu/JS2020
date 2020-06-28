const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInputNumber() {
    return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file
}

/* takes input from add function that added as params in writeToLog funct */
function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
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

/*  reusable conditions in functions  */
/* checks all are ture only true value executes*/
function calculateResult(calculationType) {
const enteredNumber = getUserInputNumber();
if (calculationType !== 'ADD' &&
    calculationType !== 'SUBTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVIDE' ||
    //enteredNumber === 0
    !enteredNumber // falsy and truthy check 
) {
    return;
}

/* checking any of one the value is true or not */
// if(calculationType === 'AND' || calculationType === 'SUBTRACT' || calculationType === 'MULTIPLY' || calculationType === 'DIVIDE'){
//     return;
// }
   
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }
        createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
    calculateResult('ADD');
}
function subtract() {
    calculateResult('SUBTRACT');
}
function multiply() {
    calculateResult('MULTIPLY');
}
function divide() {
    calculateResult('DIVIDE');
}

/* listners and calling functions */
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);