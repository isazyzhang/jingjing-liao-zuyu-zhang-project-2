import "./css/PlayerTile.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PlayerTile(props) {
<<<<<<< HEAD
    const condition = props.condition;
    return (
        <div class="playerTile" id={condition}>
            {condition}
        </div>
    )
}
=======
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
>>>>>>> df795d8f98a6355c5e784d028e3d0e09516f184b
