
/* in JS we must decalre the variable before using them.. no need to assign a value */
const defaultResult = 0;
let currentResult = defaultResult;

 currentResult = add (1,2);

let test= `( ${defaultResult} + 10) * 3/2-1`;

outputResult(currentResult, test);

/* we can use functions anywhere in the file..but good to have functions in above the file */
function add(a, b) {
    const result = a + b;
    return result;
}