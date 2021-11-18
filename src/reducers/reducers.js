import { combineReducers } from "redux";
import humanBoardReducer from "./HumanBoardReducer";
import computerBoardReducer from "./ComputerBoardReducer";
import turnReducer from "./turnReducer";

export default combineReducers({
  humanBoard: humanBoardReducer,
  computerBoard: computerBoardReducer,
  turn: turnReducer,
});
