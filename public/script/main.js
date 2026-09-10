import {ROWS, COLS, SIZE} from "./config.js"
import { initBoard, drawBoard } from "./board.js"

document.documentElement.style.setProperty('--rows', ROWS);
document.documentElement.style.setProperty('--cols', COLS);
document.documentElement.style.setProperty('--size', `${SIZE}px`);


export const Game = {
    population: 0,
    board: initBoard(),
}

drawBoard();