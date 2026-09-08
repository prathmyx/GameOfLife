import {ROWS, COLS, SIZE} from "./config.js"
import { initBoard, drawBoard, getNextBoard, render } from "./board.js"

document.documentElement.style.setProperty('--rows', ROWS);
document.documentElement.style.setProperty('--cols', COLS);
document.documentElement.style.setProperty('--size', `${SIZE}px`);

export let population = 0;
export let board = initBoard();
drawBoard();


const nextButton = document.getElementById('next-btn');
nextButton.addEventListener('click', () => {
    next();
});

function next() {
    board = getNextBoard();
    render();
}

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

const resetButton = document.getElementById('reset-btn');
resetButton.addEventListener('click', () => {
    board = initBoard();
    render();
})