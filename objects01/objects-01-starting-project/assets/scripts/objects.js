let person = {
    name: 'raja',
    age: 20,
    hobbies: [
        'Sports', 'Cooking'
    ],
    greet: function () {
        alert('Hi There')
    }
};


//modifying object data already defined
person.age =303 ;
//delete obj data
delete person.age;
//addinng new key value to obj
person.isAdmin = true;
console.log(person);
