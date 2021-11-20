import React from "react";
import "./css/Boards.css";
import PlayerTile from "./PlayerTile";
import "./css/PlayerBoard.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


export default function PlayerBoard() {
  const playerBoardState = useSelector((state) => state.playerGame.board);
  const turnState = useSelector((state) => state.turn);
  
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
      if (playerBoardState[i][j] === "n" || playerBoardState[i][j] === "⚫") {
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

  return (
    <div>
      <div id="board">{boardComponent}</div>
    </div>
  );
}
