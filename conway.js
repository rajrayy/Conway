

function countLivingNeighbors(row, col, numRows, numCols, board) {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {

      if (i === 0 && j === 0) continue;

      let neighborRow = row + i;
      let neighborCol = col + j;
      if (neighborRow >= 0 && neighborRow < numRows && neighborCol >= 0 && neighborCol < numCols) {
        if (board[neighborRow][neighborCol]) {
          count++;
        }
      }
    }
  }
  return count;
}

function stepBoard(board) {

  let newBoard = [];

  let numRows = board.length;

  if (numRows === 0) {
    return [];
  }

  let numCols = board[0].length;

  for (let row = 0; row < numRows; row++) {
    newBoard[row] = [];
    for (let col = 0; col < numCols; col++) {
      let isCellAlive = board[row][col];
      let livingNeighbors = countLivingNeighbors(row, col, numRows, numCols, board);

      if (isCellAlive && (livingNeighbors < 2 || livingNeighbors > 3)) {
        newBoard[row][col] = false;
      } else if (!isCellAlive && livingNeighbors === 3) {
        newBoard[row][col] = true;
      } else {
        newBoard[row][col] = isCellAlive;
      }
    }
  }

  return newBoard;
}
