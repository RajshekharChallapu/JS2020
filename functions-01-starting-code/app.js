const startGameBtn = document.getElementById('start-game-btn');

function startGame(){
    console.log('game is starting')
}

const person = {
    name: 'Max',
    //using function in an object i scalled methods
    greet: function greet() {
        console.log('helo there');
    }
};

// called method
person.greet();

startGameBtn.addEventListener('click', startGame);