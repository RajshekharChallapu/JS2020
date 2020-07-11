let name = 'Raja';

//here if we use "var" optput prints with out any error..const and let are not letting to access by outside of the block.. so we have more control on if or functions blocks..so to say if we declare the variable inside the blok means to use it in that function only
if(name === 'Raja'){
    let hobbies = ['Sports', 'Cooking'];
    console.log(hobbies);
}
function greet(){
    let age = 30;
    let name = 'mans'
    console.log(name, age, hobbies );
}
console.log(name, hobbies);
greet();