
const defaultResult = 10;
let currentResult = defaultResult;

/* creating a num function to get splitting code into functions and calling usefull for more code scenarios */
function getUserInputNumber(){
return parseInt(usrInput.value);
}

function add() {
    const enteredNumber = getUserInputNumber();
    const calcDescription = `${currentResult} + ${enteredNumber}`;
    currentResult = currentResult +enteredNumber;
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);




