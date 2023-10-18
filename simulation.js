
let board = [];
let intervalId = null;

function initializeBoard() {
  const size = 25;
  board = Array(size).fill(null).map((_, i) => Array(size).fill(null).map((_, j) => (i + j) % 2 === 0));
  createBoard();
}

function createBoard() {
  const table = document.getElementById('board');

  board.forEach(rowData => {
    const row = document.createElement('tr');
    rowData.forEach(isAlive => {
      const cell = document.createElement('td');
      cell.className = isAlive ? 'alive' : 'dead';
      row.appendChild(cell);
    });
    table.appendChild(row);
  });
}

function renderBoard() {
  const size = 25;
  board = Array(size).fill(null).map((_, i) => Array(size).fill(null).map((_, j) => (i + j) % 2 === 0));
  updateBoard();
}

function updateBoard() {
  const table = document.getElementById('board');
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let cell = table.children[i].children[j];
      cell.className = board[i][j] ? 'alive' : 'dead';
    }
  }
}


function step() {
  board = stepBoard(board);
  updateBoard();
}

function reset() {
  clearInterval(intervalId);
  intervalId = null;
  renderBoard();
}

function go() {
  if (intervalId === null) {
    intervalId = setInterval(step, 100);
  }
}

function pause() {
  clearInterval(intervalId);
  intervalId = null;
}

function random() {
  clearInterval(intervalId);
  intervalId = null;
  board = generateRandomBoard();
  updateBoard();
}

function generateRandomBoard() {
  const board = [];
  for (let i = 0; i < 25; i++) {
    const row = [];
    for (let j = 0; j < 25; j++) {
      row.push(Math.random() > 0.5);
    }
    board.push(row);
  }
  return board;
}


document.getElementById('step').addEventListener('click', step);
document.getElementById('reset').addEventListener('click', reset);
document.getElementById('go').addEventListener('click', go);
document.getElementById('pause').addEventListener('click', pause);
document.getElementById('random').addEventListener('click', random);

initializeBoard();

