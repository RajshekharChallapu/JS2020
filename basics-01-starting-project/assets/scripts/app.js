
const defaultResult = 10;
let currentResult = defaultResult;



function add() {
      //resuable variable and it is converting string to number
    const enteredNumber = parseInt(usrInput.value)
    // any vaule passded in to this literal is coverted as string by default
    const calcDescription = `${currentResult} + ${enteredNumber}`;
    currentResult = currentResult + parseInt(enteredNumber);
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);




