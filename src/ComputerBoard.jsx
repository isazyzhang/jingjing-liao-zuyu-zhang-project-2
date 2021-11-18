import ComputerSquare from "./ComputerSquare";
import "./Game.css";
import { useSelector } from "react-redux";

export default function ComputerBoard() {
  const computerBoardState = useSelector((state) => state.computerBoard.board);

  const computerBoardComponent = [];
  for (let i = 0; i < computerBoardState.length; i++) {
    let row = computerBoardState[i];
    for (let j = 0; j < row.length; j++) {
      computerBoardComponent.push(
        <ComputerSquare symbol={computerBoardState[i][j]} x={i} y={j} />
      );
    }
  }

  return <div class="board">{computerBoardComponent}</div>;
}
