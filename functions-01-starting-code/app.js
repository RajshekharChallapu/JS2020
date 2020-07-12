const startGameBtn = document.getElementById('start-game-btn');

const ROCK ='ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;

const getPlayerChoice = function() {
    const selection = prompt ('${ROCK}, ${PAPER} or ${SCISSORS}?', '').toUpperCase();
    if(
        selection !== 'Rock' &&
        selection !== 'Paper' &&
        selection !== 'Scissors'
    ){
        alert ('Invalid choice! we chose ${DEFAULT_USER_CHOICE} for you!');
        return DEFAULT_USER_CHOICE;
    }
}
startGameBtn.addEventListener('click', function(){
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log('game start ');
    const palyerSelection = getPlayerChoice();
    console.log(palyerSelection);
});