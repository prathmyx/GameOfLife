import { ROWS, COLS } from "./config.js";

export function initBoard() {
    return Array.from({length : ROWS}, () => Array(COLS).fill(false))   
}

export function drawBoard(board) {
    const canvas = document.getElementById('main-board');
    
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board.length; col++) {
            let cell = document.createElement('button');

            cell.dataset.row = row;
            cell.dataset.col = col;

            if (board[row][col]) cell.classList.add(alive);

            cell.addEventListener('click', () => {
                const row = +cell.dataset.row;
                const col = +cell.dataset.col;

                board[row][col] = !board[row][col];
                
                render(board);
            })

            canvas.appendChild(cell);
        }
    }
}

export function render(board) {
    const cells = document.querySelectorAll("#main-board button");
    
    cells.forEach(cell => {
        const row = Number(cell.dataset.row);
        const col = Number(cell.dataset.col);
    
        cell.classList.toggle("alive", board[row][col]);
    });
}

export function getAdjacentCount(board, row, col) {
    let count = 0;

    for (let di = -1; di <= 1; di++) {
        for (let dj = -1; dj <= 1; dj++) {

            if (di === 0 && dj === 0) continue;

            let i = row + di; 
            let j = col + dj;

            if (i >= 0 && i < ROWS && j >= 0 && j < COLS && (board[i][j] === true)) {
                count++;
            }
        }
    }

    return count;
}