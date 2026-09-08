import {ROWS, COLS, SIZE} from "./config.js"
import { initBoard, drawBoard, getNextBoard, render } from "./board.js"

document.documentElement.style.setProperty('--rows', ROWS);
document.documentElement.style.setProperty('--cols', COLS);
document.documentElement.style.setProperty('--size', `${SIZE}px`);

let board = initBoard()
drawBoard(board);


const nextButton = document.getElementById('next-btn');
nextButton.addEventListener('click', () => {next();});

function next() {
    board = getNextBoard(board);
    render(board);
}