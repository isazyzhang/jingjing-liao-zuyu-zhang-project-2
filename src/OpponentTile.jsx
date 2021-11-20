import "./css/OpponentTile.css";
import React from 'react';
import { useDispatch } from 'react-redux';

export default function OpponentTile(props) {
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