
// const used for fixed values
const defaultResult =0;

//assigning const variable --value is always '0'
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3/2-1;

//enclosed by backtick is called template literal and "$" sign with {currly} braces are placeholders 
let test= `( ${defaultResult} + 10) * 3/2-1`;

let errorMessage = 'An error' + ' occurred!';

// print the results by calling decalred params
outputResult(currentResult, errorMessage);
