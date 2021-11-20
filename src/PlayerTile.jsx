import "./css/PlayerTile.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PlayerTile(props) {
  const condition = props.condition; // n or s or a
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch({
          type: "ComputerClickSquare",
          x: props.x,
          y: props.y,
        });
        setTimeout(() => {
          dispatch({
            type: "ComputerChangeTurn",
          });
        }, 2000);
      }}
      id="opponentTile"
      class={condition}
    >
      {condition}
    </div>
  );
}
