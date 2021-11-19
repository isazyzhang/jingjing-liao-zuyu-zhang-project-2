import "./FreePlayBoard.css";
import { useSelector } from "react-redux";
import ResetButton from "./ResetButton";
import ComputerBoard from "./ComputerBoard";

export default function Board() {
  const humanClickCount = useSelector((state) => state.computerBoard.count);
  const totalShipsSquares = 17;
  let winner = "";
  if (humanClickCount === totalShipsSquares) {
    winner = "Game Over! You Won!";
  }

  return (
    <div>
      <ResetButton text="Reset The Game" />
      <div class="count">Score: {humanClickCount}</div>
      <div class="winner">{winner} </div>
      {<ComputerBoard />}
    </div>
  );
}
