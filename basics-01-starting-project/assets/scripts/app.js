
/* in JS we must decalre the variable before using them.. no need to assign a value */
const defaultResult = 0;
let currentResult = defaultResult;

/* we can use functions anywhere in the file..but good to have functions in above the file*/
/* this function can have access to global variables that declared above ex: const and let */
/* pure functions */
function add(a, b) {
    /* this is called local or block scope..means availble to only this function */
    const result = a + b;
    return result;
}

 currentResult = add (1,2);

let test= `( ${defaultResult} + 10) * 3/2-1`;

outputResult(currentResult, test);

