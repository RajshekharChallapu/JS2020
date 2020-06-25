
const defaultResult = 10;
let currentResult = defaultResult;



function add() {
    //here currentResul treated as number and  userInput as string..so to covert this to number we have inbuilt methods like parseInt, parseFloat
// aslo we can use , if we want non decimal number currentResult = currentResult
// + +(userInput.value);
    currentResult = currentResult + parseInt(userInput.value);

    /* convert number to string, as we know below currentResult is storing numbers only so to convert this ...EX: userInput =10 and result would be like 1010 */
currentResult = currentResult.toString() + parseInt(userInput.value);

    outputResult(currentResult, '');
}

addBtn.addEventListener('click', add);




