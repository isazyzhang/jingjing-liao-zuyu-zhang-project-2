import { combineReducers } from "redux";
import playerGameReducer from "./playerGameReducer";
import AIGameReducer from "./AIGameReducer";
import turnReducer from "./turnReducer";

export default combineReducers({
    playerGame: playerGameReducer,
    AIGame: AIGameReducer,
    turn: turnReducer
});