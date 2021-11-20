import "./css/OpponentTile.css";
import React from "react";
import { useDispatch } from "react-redux";

export default function OpponentTile(props) {
<<<<<<< HEAD
    const condition = props.condition;
    const dispatch = useDispatch();
    return (
        <div onClick={() => {
            dispatch (
                {
                    type: 'HumanClickSquare',
                    x:props.x,
                    y:props.y
                }
            );
            setTimeout(() => {
                dispatch({
                    type: "HumanChangeTurn",
                });
            }, 2000);
        }}class="opponentTile" id={condition}>
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
          type: "HumanClickSquare",
          x: props.x,
          y: props.y,
        });
        setTimeout(() => {
          dispatch({
            type: "HumanChangeTurn",
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
