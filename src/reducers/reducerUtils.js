import { cloneDeep } from "lodash";

// Randomly choose five ships in the board, ship position will mark as " "
export function randomlyChooseFiveShips(board) {
  const totalShip = 5;
  let newArray = [];
  for (let i = 0; i < board.length; i++) {
    newArray.push(i);
  }

  let shipCount = 0;
  while (shipCount !== totalShip) {
    let rowPos = newArray[Math.floor(Math.random() * newArray.length)];
    let colPos = newArray[Math.floor(Math.random() * newArray.length)];
    if (board[rowPos][colPos] === "") {
      board[rowPos][colPos] = " ";
      shipCount += 1;
    }
  }
  return cloneDeep(board);
}
