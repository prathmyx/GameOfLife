import {ROWS, COLS, SIZE} from "./config.js"
import { initBoard, drawBoard } from "./board.js"
import { setState } from "./utils/serverCheck.js";

document.documentElement.style.setProperty('--rows', ROWS);
document.documentElement.style.setProperty('--cols', COLS);

export const Game = {
    population: 0,
    board: initBoard(),
    draw: () => {
        drawBoard();
    }
}

Game.draw();

setTimeout(setState, 1000);