
const defaultResult = 10;
let currentResult = defaultResult;


function add() {
    // any vaule passded in to this literal is coverted as string by default
const calcDescription = `${currentResult} + ${userInput.value}`
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult,calcDescription );
}

addBtn.addEventListener('click', add);




