import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./css/WelcomePage.css";

export default function StartGame() {

    return (
        <div>
            <div id="buttons">
                <button class="button">
                    <Link class="welcome-link" to={"/normalGame"}>Normal Game</Link>
                </button>
                <button class="button">
                    <Link class="welcome-link" to={"/freeplay"}>Free Play</Link>
                </button>
            </div>
        </div>
    )
}