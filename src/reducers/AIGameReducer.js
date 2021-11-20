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