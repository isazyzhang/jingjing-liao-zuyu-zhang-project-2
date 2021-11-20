import "./css/PlayerTile.css";
import React from 'react';

export default function PlayerTile(props) {
    const condition = props.condition;
    return (
        <div class="playerTile" id={condition}>
            {condition}
        </div>
    )
}