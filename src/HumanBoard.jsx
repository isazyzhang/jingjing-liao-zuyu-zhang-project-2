import HumanSquare from "./HumanSquare";
import "./Game.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// This is the hack to skip a duplicate dispatch because triggered humanBoardState change.
let computerClickOnce = false;

export default function HumanBoard() {
  const humanBoardState = useSelector((state) => state.humanBoard.board);

  const humanBoardComponent = [];
  for (let i = 0; i < humanBoardState.length; i++) {
    let row = humanBoardState[i];
    for (let j = 0; j < row.length; j++) {
      humanBoardComponent.push(
        <HumanSquare symbol={humanBoardState[i][j]} x={i} y={j} />
      );
    }
  }

  // Find out the available position that computer can click, avoid cliking the occupied position more than once
  let availablePos = [];

  for (let i = 0; i < humanBoardState.length; i++) {
    for (let j = 0; j < humanBoardState[i].length; j++) {
      if (humanBoardState[i][j] === "" || humanBoardState[i][j] === "Ship") {
        availablePos.push([i, j]);
      }
    }
  }

  const dispatch = useDispatch();

  setTimeout(() => {
    if (computerClickOnce) {
      computerClickOnce = false;
      return;
    }
    let pos = availablePos[Math.floor(Math.random() * availablePos.length)];
    dispatch({
      type: "ComputerClickSquare",
      x: pos[0],
      y: pos[1],
    });
    computerClickOnce = true;
  }, 2000);

  setTimeout(() => {
    dispatch({ type: "ComputerChangeTurn" });
  }, 4000);
  return <div class="board">{humanBoardComponent}</div>;
}
