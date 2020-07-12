const startGameBtn = document.getElementById('start-game-btn');


// creating a function in expression mode // 
const start = function (){
    console.log('game is starting');
};

// const person = {
//     name: 'Max',
//     //using function in an object i scalled methods
//     greet: function greet() {
//         console.log('helo there');
//     }
// };

// called method
//person.greet();

//console.dir(startGame);

startGameBtn.addEventListener('click', start);