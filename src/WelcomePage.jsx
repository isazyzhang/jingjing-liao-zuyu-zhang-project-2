import React from "react";
import { Link } from "react-router-dom";
import "./css/WelcomePage.css";

export default function WelcomePage() {
    return (
        <div class="welcome-page">
            <h1 id="game-title">
                Welcome to Battleship Game!
            </h1>
            <div>
                <button class="button">
                    <Link class="welcome-link" to={"/Rules"}>Rules</Link>
                </button>
                <button class="button">
                    <Link class="welcome-link" to={"/StartGame"}>Play Game</Link>
                </button>
            </div>
        </div>
    )
}