import React from "react";
import "./css/Boards.css";
import PlayerTile from "./PlayerTile";
import "./css/PlayerBoard.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// This is the hack to skip a duplicate dispatch because triggered humanBoardState change.
let computerClickOnce = false;

export default function PlayerBoard() {
  const playerBoardState = useSelector((state) => state.playerGame.board);
  // const AIScore = useSelector((state) => state.playerGame.AIScore);

  const boardComponent = [];
  for (let i = 0; i < playerBoardState.length; i++) {
    let row = playerBoardState[i];
    for (let j = 0; j < row.length; j++) {
      boardComponent.push(
        <PlayerTile condition={playerBoardState[i][j]} x={i} y={j} />
      );
    }
  }

  // Find out the available position that computer can click, avoid cliking the occupied position more than once
  let availablePos = [];
  for (let i = 0; i < playerBoardState.length; i++) {
    for (let j = 0; j < playerBoardState[i].length; j++) {
      if (playerBoardState[i][j] === "" || playerBoardState[i][j] === "s") {
        availablePos.push([i, j]);
      }
    }
  }

  const dispatch = useDispatch();

  // setTimeout(() => {
  //     if (computerClickOnce) {
  //       computerClickOnce = false;
  //       return;
  //     }
  //     let pos = availablePos[Math.floor(Math.random() * availablePos.length)];
  //     dispatch({
  //       type: "ComputerClickSquare",
  //       x: pos[0],
  //       y: pos[1],
  //     });
  //     computerClickOnce = true;
  //   }, 2000);

  //   setTimeout(() => {
  //     dispatch({ type: "ComputerChangeTurn" });
  //   }, 4000);

  return (
    <div>
      {/* <div>
                Computer's Score: {AIScore}
            </div> */}
      <div id="board">{boardComponent}</div>
    </div>
  );
}
