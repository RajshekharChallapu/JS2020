// /* create Array */

// const numbers = [1,2,3];
// console.log(numbers);


// //constructor functions to create a new array
// const moreNumbers = Array(5, 2);
// console.log(moreNumbers);

// //this would be slower for performance perspective
// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);


// //Array.from will not take multiple args...
// // const fromNumbers = Array.from(1,3);

// //so to use multi args we
// const fromNumbers = Array.from([1, 3]);
// console.log(fromNumbers);

// //html elements in array
// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const fromNumber = Array.from (listItems);
// console.log(fromNumber);


// const hobbies = ['Cooking', 'sport'];

// const personalData = [30, 'Max', {moreDetails: []}];
// console.log(personalData);

// const analystData = [[1, 1.6], [-5.4, 2.1]];
// //console.log(analystData);

// for (const data of analystData){
//     for (const dataPoints of data){
//         console.log(dataPoints);
//     }
//    // console.log(data);
// }

// console.log(personalData[1]);

// push and pop are good to use
const hobbies = ['Sports','cook'];
//adding elements to array...this adds elements at the end
hobbies.push('no cook');
// adding  element at the begning unshift() method
hobbies.unshift('reading');

// pop() removes end elements.. beloow will help to store the value in variable
const poppedValue = hobbies.pop();
hobbies.shift();
console.log(hobbies);

hobbies[1] ='reading';
hobbies[5] ='cook';
console.log(hobbies);
