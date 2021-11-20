import OpponentTile from "./OpponentTile";
import React from "react";
import "./css/OpponentBoard.css";
import "./css/OpponentTile.css";
import "./css/Boards.css";
import { useSelector} from 'react-redux';

export default function OpponentBoard() {

    const AIBoardState = useSelector((state) => state.AIGame.board);
    
    const boardComponent = [];
    for (let i = 0; i < AIBoardState.length; i++) {
        let row = AIBoardState[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push(<OpponentTile 
                condition={AIBoardState[i][j]}
                x={i}
                y={j} />);
        }
    }
    return (
        <div>
            <div id="board">
                {boardComponent}
            </div>
        </div>
    )
}