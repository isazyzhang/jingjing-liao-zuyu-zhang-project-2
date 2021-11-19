import { cloneDeep } from "lodash";
import { randomlyChooseFiveShips } from "./reducerUtils";

export default function humanBoardReducer(state, action) {
  const initialBoard = [
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ];

  const initialState = {
    count: 0,
    board: randomlyChooseFiveShips(initialBoard),
  };

  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case "ComputerClickSquare": {
      const value = state.board[action.x][action.y];
      if (value === "Ship") {
        state.board[action.x][action.y] = "X";
        state.count++;
      } else if (value === "") {
        const copy = cloneDeep(state.board);
        copy[action.x][action.y] = "✓";
        state.board = copy;
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
