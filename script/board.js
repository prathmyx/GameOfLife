export function initBoard(rows, cols) {
    return Array.from({length : rows}, () => Array(cols).fill(false))   
}

export function drawBoard(board, canvas) {
    
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board.length; col++) {
            let cell = document.createElement('button');

            cell.dataset.row = row;
            cell.dataset.col = col;

            if (board[row][col]) cell.classList.add(alive);

            cell.addEventListener('click', () => {
                const row = +cell.dataset.row;
                const col = +cell.dataset.col;

                board[row][col] != board[row][col];

            })

            canvas.appendChild(cell);
        }
    }
}
