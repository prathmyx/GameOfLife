import {ROWS, COLS, SIZE} from "./config.js"
import { initBoard, drawBoard, render } from "./board.js"
import { setState } from "./utils/serverCheck.js";
import { handleAuthClick } from "./handleAuth.js";

document.documentElement.style.setProperty('--rows', ROWS);
document.documentElement.style.setProperty('--cols', COLS);

export const Game = {
    population: 0,
    board: initBoard(),
    draw: () => {
        drawBoard();
    },
    render: () => {
        render();
    }
}

Game.draw();

setTimeout(setState, 1000);

handleAuthClick();