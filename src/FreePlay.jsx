import "./css/FreePlayBoard.css";
import { useSelector } from "react-redux";
import ResetButton from "./ResetButton";
import OpponentBoard from "./OpponentBoard";

export default function Board() {
  const humanClickCount = useSelector((state) => state.AIGame.count);
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
      <div class="opponentBoard">{<OpponentBoard />}</div>
    </div>
  );
}
