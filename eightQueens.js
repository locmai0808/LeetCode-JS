var count = 0;

function isAvailable(arr, row, col) {
  let i = 1;
  while (i < row) {
    if (
      arr[i - 1] === col ||
      arr[i - 1] - i === col - row ||
      arr[i - 1] + i === col + row
    ) {
      return 0;
    }
    i++;
  }
  return 1;
}

function countPossibilities(arr, row, col) {
  let c = 1;
  if (row === 8) {
    arr[7] = col;
    count++;
    return;
  }
  arr[row - 1] = col;
  while (c <= 8) {
    if (c !== col && isAvailable(arr, row + 1, c))
      countPossibilities(arr, row + 1, c);
    c++;
  }
}

function eightQueens() {
  let col = 1;
  while (col <= 8) {
    countPossibilities([], 1, col);
    col++;
  }
  console.log(count);
}

eightQueens();
