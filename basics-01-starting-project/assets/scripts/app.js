
// const used for fixed values
const defaultResult =0;

//assigning const vaiable --value is always '0'
let currentResult = defaultResult;

function add(a, b) {
    const result = a + b;
    return result;
}

// storing function value and by calling function and funct do the calculation as instructed in above function 
 currentResult = add (1,2);


//enclosed by backtick is called template literal and "$" sign with {currly} braces are placeholders 
let test= `( ${defaultResult} + 10) * 3/2-1`;


// print the results by calling decalred param
outputResult(currentResult, test);
