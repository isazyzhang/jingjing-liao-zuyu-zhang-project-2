import "./Game.css";
import { useSelector } from "react-redux";
import ResetButton from "./ResetButton";
import HumanBoard from "./HumanBoard";
import ComputerBoard from "./ComputerBoard";

export default function Game() {
  const humanClickCount = useSelector((state) => state.computerBoard.count);
  const computerClickCount = useSelector((state) => state.humanBoard.count);
  const turn = useSelector((state) => state.turn);

  const totalShips = 5;
  let winner = "";
  if (humanClickCount === totalShips) {
    winner = "Game Over! You Won!";
  } else if (computerClickCount === totalShips) {
    winner = "Game Over! Computer Won!";
  }

  return (
    <div>
      <div class="count">
        Score: {turn === 0 ? humanClickCount : computerClickCount}
      </div>
      <div class="count">{turn === 0 ? "Human's Turn" : "Computer's Turn"}</div>
      <div class="winner">{winner} </div>
      {turn === 0 ? <ComputerBoard /> : <HumanBoard />}
      <ResetButton text="Reset The Game" />
    </div>
  );
}
