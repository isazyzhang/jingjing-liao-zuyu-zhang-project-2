import React from "react";
import "./css/NormalGame.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import PlayerBoard from "./PlayerBoard";
import "./css/Boards.css";
import OpponentBoard from "./OpponentBoard";
import { useSelector } from "react-redux";
import ResetButton from "./ResetButton";

export default function NormalGame() {
  const humanClickCount = useSelector((state) => state.AIGame.count);
  const computerClickCount = useSelector((state) => state.playerGame.count);
  const turn = useSelector((state) => state.turn);

  const totalScore = 17;
  let winner = "";
  if (humanClickCount === totalScore) {
    winner = "Congratulations, You Won!";
  } else if (computerClickCount === totalScore) {
    winner = "Game Over! The Computer Won!";
  }

  return (
    <div>
      <ResetButton text="Reset The Game" />
      {/* <div class="count">
                Score: {turn === 0 ? humanClickCount : computerClickCount}
            </div> */}
      {/* <div class="count">{turn === 0 ? "Human's Turn" : "Computer's Turn"}</div> */}
      <div class="winner">{winner} </div>
      <div id="boards">
        <div id="opponent">
          <h1>Opponent Board</h1>
          <div>
            <OpponentBoard />
          </div>
        </div>

        <div id="own">
          <h1>Your Board</h1>
          <div>
            <PlayerBoard />
          </div>
        </div>
      </div>
      {/* {turn === 0 ? <ComputerBoard /> : <HumanBoard />} */}
    </div>
  );

  // return (
  //     <div>
  //       <div>
  //         <ResetButton text="Reset The Game" />
  //       </div>
  //       <div class="count">
  //         Score: {turn === 0 ? humanClickCount : computerClickCount}
  //       </div>
  //       <div id="boards">
  //         <div id="opponent">
  //             <h1>Opponent Board</h1>
  //               <div>
  //                 <ComputerBoard />
  //               </div>
  //         </div>

  //         <div id="own">
  //             <h1>Your Board</h1>
  //               <div>
  //                 <HumanBoard />
  //               </div>
  //         </div>
  //       </div>
  //       </div>
  //   )

  // return (
  //     <div>
  //         <div id="boards">
  //             <div id="opponent" turn={turn}>
  //                 <h1>Opponent Board</h1>
  //                 <div>
  //                     <OpponentBoard />
  //                 </div>
  //             </div>
  //             <div id="own" turn={turn}>
  //                 <h1>
  //                     Your Board
  //                 </h1>
  //                 <div>
  //                     <PlayerBoard />
  //                 </div>
  //             </div>
  //         </div>
  //     </div>
  // )
}
