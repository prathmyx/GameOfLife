const board = document.getElementById('main-board');

const COL = 25;
const ROW = 25;

for (let i = 0; i < COL * ROW; i++) {
    let li = document.createElement('button');
    board.appendChild(li);
}
