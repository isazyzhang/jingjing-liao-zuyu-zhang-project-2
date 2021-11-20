import { cloneDeep } from "lodash";
import { randomlyChooseFiveShipsForPlayer } from "./PlayerReducerUtils";

export default function playerGameReducer(state, action) {
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
    board: randomlyChooseFiveShipsForPlayer(initialBoard),
  };

  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case "ComputerClickSquare": {
      const value = state.board[action.x][action.y];
      if (value === "⚫") {
        // the computer gets a hit
        const copy = cloneDeep(state.board);
        copy[action.x][action.y] = "X";
        state.board = copy;
        state.count++;
<<<<<<< HEAD
      } else if (value === "n") {
=======
        // state.AIScore++;
        // if (state.AIScore === 17) {
        //     alert("The computer won!");
        // }
      } else if (value === "") {
>>>>>>> df795d8f98a6355c5e784d028e3d0e09516f184b
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
    default: {
      return state;
    }
  }
}