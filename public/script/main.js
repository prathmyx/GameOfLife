import {ROWS, COLS, SIZE} from "./config.js"
import { initBoard, drawBoard } from "./board.js"

document.documentElement.style.setProperty('--rows', ROWS);
document.documentElement.style.setProperty('--cols', COLS);
document.documentElement.style.setProperty('--size', `${SIZE}px`);

const canvas = document.getElementById('main-board');

drawBoard(initBoard(ROWS, COLS), canvas);

