import { cloneDeep } from "lodash";
import { randomlyChooseFiveShipsForAI } from "./AIreducerUtils";

export default function AIGameReducer(state, action) {
  const initialBoard = [
    ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
    ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
    ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
    ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
    ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
    ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
    ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
    ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
    ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
    ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n"]
  ];

  const initialState = {
    count: 0,
    board: randomlyChooseFiveShipsForAI(initialBoard),
  };

  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case "HumanClickSquare": {
      const value = state.board[action.x][action.y];
      if (value === "s") {
        state.board[action.x][action.y] = "X";
        state.count++;
      } else if (value === "n") {
        const copy = cloneDeep(state.board);
        copy[action.x][action.y] = "✓";
        state.board = copy;
        // Avoid human click the occupied position more than once, give an alert
      } else if (value === "X" || value === "✓") {
        alert("Do not click again!"); 
      }
      return { ...state };
    }
    case "RESET": {
      state.board = initialState.board;
      state.count = 0;
      return { ...state };
    }
    default:
      return state;
  }
}

// if (isGameBoardEmpty()) {
//     generateGameBoard();
// }
// switch (action.type) {
//     case "HumanClickSquare" : {
//         const value = state.board[action.x][action.y];
//         if (value === "s") {
//             // the player gets a hit
//             const copy = cloneDeep(state.board);
//             copy[action.x][action.y] = "X";
//             state.board = copy;
//             state.count++;
// state.playerScore++;
// if (state.playerScore === 17) {
//     alert("Congratulations, you won!");
// }
// } else if (value === "n") {
//     const copy = cloneDeep(state.board);
//     copy[action.x][action.y] = "a";
//     state.board = copy;
// } else if (value === "X" || value === "a") {
//     alert("Do not click here again!");
// }
// state.turn = 1;
//         return {...state};
//     }
//     case "RESET": {
//         state.board = initialState.board;
//         state.count = 0;
//         return {...state};
//     }
//     default: {
//         return state;
//     }
// }
// };

// function isGameBoardEmpty() {
//     for (let i = 0; i < defaultState.board.length; i++) {
//         for (let j = 0; j < defaultState.board[i].length; j++) {
//             if (defaultState.board[i][j] !== "n") {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// function generateGameBoard() {

//     // 5*1 ship
//     validateAndPut(5);
//     // 4*1 ship
//     validateAndPut(4);
//     // 2 times 3*1 ships
//     validateAndPut(3);
//     validateAndPut(3);
//     // 2*1 ship
//     validateAndPut(2);
// }

// function validateAndPut(size) {
//     // use array to store the eligible directions and starting coordinates
//     const eligible = [];
//     // pick a random tile on the game board
//     const x = Math.floor(Math.random() * (defaultState.board.length));
//     const y = Math.floor(Math.random() * (defaultState.board.length));
//     // check left
//     let i = 0;
//     while (i < size && y - i >= 0) {
//         if (defaultState.board[x][y - i] === "s") {
//             break;
//         } else {
//             i++;
//         }
//     }
//     if (i === size) {
//         eligible.push(["left", x, y]);
//     }
//     // check right
//     let j = 0;
//     while (j < size && y + j < defaultState.board.length) {
//         if (defaultState.board[x][y + j] === "s") {
//             break;
//         } else {
//             j++;
//         }
//     }
//     if (j === size) {
//         eligible.push(["right", x, y]);
//     }
//     // check up
//     let k = 0;
//     while (k < size && x - k >= 0) {
//         if (defaultState.board[x - k][y] === "s") {
//             break;
//         } else {
//             k++;
//         }
//     }
//     if (k === size) {
//         eligible.push(["up", x, y]);
//     }
//     // check down
//     let l = 0;
//     while (l < size && x + l < defaultState.board.length) {
//         if (defaultState.board[x + l][y] === "s") {
//             break;
//         } else {
//             l++;
//         }
//     }
//     if (l === size) {
//         eligible.push(["down", x, y]);
//     }

//     if (eligible.length === 0) {
//         validateAndPut(size);
//     }
//     // To ensure the ships generated are placed as randomly as possible, we select a position randomly out of all available ones
//     let randomDirection = Math.floor(Math.random() * eligible.length);
//     let direction = eligible[randomDirection][0];
//     let x_axis = eligible[randomDirection][1];
//     let y_axis = eligible[randomDirection][2];

//     if (direction === "left") {
//         for (let i = 0; i < size; i++) {
//             defaultState.board[x_axis][y_axis - i] = "s";
//         }
//     } else if (direction === "right") {
//         for (let i = 0; i < size; i++) {
//             defaultState.board[x_axis][y_axis + i] = "s";
//         }
//     } else if (direction === "up") {
//         for (let i = 0; i < size; i++) {
//             defaultState.board[x_axis - i][y_axis] = "s";
//         }
//     } else if (direction === "down") {
//         for (let i = 0; i < size; i++) {
//             defaultState.board[x_axis + i][y_axis] = "s";
//         }
//     }
// }
