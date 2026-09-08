import {ROWS, COLS, SIZE} from "./config.js"
import { initBoard, drawBoard, getAdjacentCount } from "./board.js"

document.documentElement.style.setProperty('--rows', ROWS);
document.documentElement.style.setProperty('--cols', COLS);
document.documentElement.style.setProperty('--size', `${SIZE}px`);

const board = initBoard()


drawBoard(board);

