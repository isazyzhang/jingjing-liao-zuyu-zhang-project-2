import { cloneDeep } from "lodash";

// Randomly choose five ships in the board, ship position will mark as " "
let ships = [5, 4, 3, 3, 2];
let direction = ["left", "up", "right", "down"];

export function randomlyChooseFiveShips(board) {
  for (let i = 0; i < ships.length; i++) {
    placeShips(board, ships[i]);
  }
  return cloneDeep(board);
}

function placeShips(board, shipLength) {
  let newArray = [];
  for (let i = 0; i < board.length; i++) {
    newArray.push(i);
  }

  let availablePosInBoard = validPositionInBoard(board);
  let randomPos =
    availablePosInBoard[Math.floor(Math.random() * availablePosInBoard.length)];
  let rowPos = randomPos[0];
  let colPos = randomPos[1];

  let placeShipsSuccessfully = false;

  while (placeShipsSuccessfully === false) {
    let dir = direction[Math.floor(Math.random() * direction.length)];
    if (dir === "left") {
      if (getShipOnBoard(board, rowPos, colPos, dir, shipLength)) {
        placeShipsSuccessfully = true;
        for (let i = 0; i < shipLength; i++) {
          board[rowPos][colPos] = "Ship";
          colPos -= 1;
        }
      }
    }
    if (dir === "right") {
      if (getShipOnBoard(board, rowPos, colPos, dir, shipLength)) {
        placeShipsSuccessfully = true;
        for (let i = 0; i < shipLength; i++) {
          board[rowPos][colPos] = "Ship";
          colPos += 1;
        }
      }
    }
    if (dir === "up") {
      if (getShipOnBoard(board, rowPos, colPos, dir, shipLength)) {
        placeShipsSuccessfully = true;
        for (let i = 0; i < shipLength; i++) {
          board[rowPos][colPos] = "Ship";
          rowPos -= 1;
        }
      }
    }
    if (dir === "down") {
      if (getShipOnBoard(board, rowPos, colPos, dir, shipLength)) {
        placeShipsSuccessfully = true;
        for (let i = 0; i < shipLength; i++) {
          board[rowPos][colPos] = "Ship";
          rowPos += 1;
        }
      }
    }
  }
  return cloneDeep(board);
}

function validPositionInBoard(board) {
  let validPos = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "") {
        validPos.push([i, j]);
      }
    }
  }
  return validPos;
}

function getShipOnBoard(board, rowPos, colPos, dir, shipLength) {
  if (dir === "left") {
    for (let i = 0; i < shipLength; i++) {
      if (validPosition(board, rowPos, colPos)) {
        colPos -= 1;
      } else {
        return false;
      }
    }
    return true;
  }
  if (dir === "right") {
    for (let i = 0; i < shipLength; i++) {
      if (validPosition(board, rowPos, colPos)) {
        colPos += 1;
      } else {
        return false;
      }
    }
    return true;
  }
  if (dir === "up") {
    for (let i = 0; i < shipLength; i++) {
      if (validPosition(board, rowPos, colPos)) {
        rowPos -= 1;
      } else {
        return false;
      }
    }
    return true;
  }
}

function validPosition(board, rowPos, colPos) {
  if (rowPos < 0 || rowPos >= board.length) {
    return false;
  }
  if (colPos < 0 || rowPos >= board.length) {
    return false;
  }
  if (board[rowPos][colPos] !== "") {
    return false;
  }
  return true;
}
