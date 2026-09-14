import {ROWS, COLS, SIZE} from "./config.js"
import { initBoard, drawBoard, render } from "./board.js"
import { setState } from "./utils/serverCheck.js";
import { handleAuthClick } from "./handleAuth.js";

document.documentElement.style.setProperty('--rows', ROWS);
document.documentElement.style.setProperty('--cols', COLS);


const authBtn = document.getElementById("authBtn");
const usernameEl = document.getElementById('username-display');

if (!localStorage.getItem('logged')) {
    localStorage.setItem('logged', 'false');
} else if (JSON.parse(localStorage.getItem('logged'))) {
    authBtn.textContent = "Logout";
    usernameEl.textContent = `Hi, ${localStorage.getItem('username')}`;
}

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