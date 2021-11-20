import React from "react";
import PlayerBoard from "./PlayerBoard";
import "./css/Boards.css";
import OpponentBoard from "./OpponentBoard";
import { useSelector } from "react-redux";
import ResetButton from "./ResetButton";
import "./css/NormalGame.css";
import { useState } from "react";

export default function NormalGame() {

    const humanClickCount = useSelector((state) => state.AIGame.count);
    const computerClickCount = useSelector((state) => state.playerGame.count);
    const [modeState, setModeState] = useState(0);

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
                <button onClick={() => {
                    setModeState(0);
                }}id="desktop" class="mode">
                    Desktop Mode
                </button>
                <button onClick={() => {
                    setModeState(1);
                }}id="mobile" class="mode">
                    Mobile Mode
                </button>
            </div>
        <ResetButton text="Reset The Game" />
        <div class="winner">{winner} </div>
        <div id={modeState === 0 ? "boards" : "mobileBoard"}>
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
        </div>
    );
}
