 import { getNextBoard, render, initBoard } from "./board.js"
 import { Game } from "./main.js";

//Next Button
const nextButton = document.getElementById('next-btn');
nextButton.addEventListener('click', () => {
    next();
});
export function next() {
    Game.board = getNextBoard();
    render();
}

//Start Button
const startButton = document.getElementById('start-btn');
let intervalId = null;

startButton.addEventListener('click', () => {
    if (intervalId == null) {
        intervalId = setInterval(next, 1000);
        startButton.textContent = 'Stop';
    } else {
        clearInterval(intervalId);
        intervalId = null;
        startButton.textContent = 'Start';
    }
});

//Reset Button
const resetButton = document.getElementById('reset-btn');
resetButton.addEventListener('click', () => {
    Game.board = initBoard();
    render();
})