import React from "react";
import PlayerBoard from "./PlayerBoard";
import "./css/Boards.css";
import OpponentBoard from "./OpponentBoard";
import { useSelector} from 'react-redux';
import ResetButton from "./ResetButton";
import "./css/NormalGame.css";


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
            <div id="navbar">
                <button id="desktop" class="mode">
                Desktop Mode
                </button>
                <button onClick={() => {
                    
                }}
                id="mobile" class="mode">
                    Mobile Mode
                </button>
            </div>
        <ResetButton text="Reset The Game" />
            {/* <div class="count">
                Score: {turn === 0 ? humanClickCount : computerClickCount}
            </div> */}
            {/* <div class="count">{turn === 0 ? "Human's Turn" : "Computer's Turn"}</div> */}
            <div class="winner">{winner} </div>
        <div id="boards">
            <div id="opponent">
                <h1 class="titles">Opponent Board</h1>
                <div>
                    <OpponentBoard />
                </div>
            </div>

            <div id="own">
                <h1 class="titles">Your Board</h1>
                <div>
                    <PlayerBoard />
                </div>
            </div>

        </div>
            {/* {turn === 0 ? <ComputerBoard /> : <HumanBoard />} */}
        </div>
    );
}