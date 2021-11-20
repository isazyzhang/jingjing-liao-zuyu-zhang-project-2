import React from "react";
import "./css/Boards.css";
import PlayerTile from "./PlayerTile";
import "./css/PlayerBoard.css";
import { useSelector, useDispatch } from "react-redux";


export default function PlayerBoard() {
  const playerBoardState = useSelector((state) => state.playerGame.board);
  const turnState = useSelector((state) => state.turn);
<<<<<<< HEAD
  
=======
  // const AIScore = useSelector((state) => state.playerGame.AIScore);

>>>>>>> df795d8f98a6355c5e784d028e3d0e09516f184b
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
<<<<<<< HEAD
      if (playerBoardState[i][j] === "n" || playerBoardState[i][j] === "⚫") {
=======
      if (playerBoardState[i][j] === "" || playerBoardState[i][j] === "s") {
>>>>>>> df795d8f98a6355c5e784d028e3d0e09516f184b
        availablePos.push([i, j]);
      }
    }
  }

  const dispatch = useDispatch();

  if (turnState === 1) {
    let pos = availablePos[Math.floor(Math.random() * availablePos.length)];
    dispatch({
      type: "ComputerClickSquare",
      x: pos[0],
      y: pos[1],
    });
    dispatch({ type: "ComputerChangeTurn" });
  }
<<<<<<< HEAD
=======

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
>>>>>>> df795d8f98a6355c5e784d028e3d0e09516f184b

  return (
    <div>
      <div id="board">{boardComponent}</div>
    </div>
  );
}
