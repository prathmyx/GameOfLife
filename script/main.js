const board = document.getElementById('main-board');

const COL = 25;
const ROW = 25;

for (let i = 0; i < COL * ROW; i++) {
    let li = document.createElement('button');
    li.addEventListener('click', () => {
        li.classList.toggle('alive');
    })
    board.appendChild(li);
}
