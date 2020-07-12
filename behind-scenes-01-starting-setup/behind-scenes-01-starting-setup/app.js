
//calling getName func in the code ... prompt will execute
function getName(){
    return prompt('your name: ', '');
}

function greet() {
    // calling getName and stored in to userName
    const userName = getName();
    console.log('Hello ' + userName);
}

// greet function calling for execution
greet();