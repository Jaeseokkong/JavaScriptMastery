const startGameBtn = document.getElementById('start-game-btn');

// const start = function startGame() {
//     console.log('Game is starting...')
// }

function start() {
    console.log('Game is starting...', age)
}

// const person = {
//     name : 'Max',
//     greet: function greet() {
//         console.log('Hello there!')
//     }
// }

// person.greet();

//console.dir(startGame)

startGameBtn.addEventListener('click', function startGame() {
    console.log('Game is starting...', age)
});