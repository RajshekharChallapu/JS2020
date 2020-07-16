/* create Array */

const numbers = [1,2,3];
console.log(numbers);


//constructor functions to create a new array
const moreNumbers = Array(5, 2);
console.log(moreNumbers);

//this would be slower for performance perspective
const yetMoreNumbers = Array.of(1, 2);
console.log(yetMoreNumbers);


//Array.from will not take multiple args...
// const fromNumbers = Array.from(1,3);

//so to use multi args we
const fromNumbers = Array.from([1, 3]);
console.log(fromNumbers);

//html elements in array
const listItems = document.querySelectorAll('li');
console.log(listItems);

const fromNumber = Array.from (listItems);
console.log(fromNumber);