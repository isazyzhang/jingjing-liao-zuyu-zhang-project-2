import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./css/Rules.css";

export default function Rules() {

    return (
        <div id="all-rules">
            <div id="title">
                Rules
            </div>
            <br /><br />
            <div id="intro">
                This is a single-player version of the classic Battleship Game.
                You will be playing against the computer!
                The goal is to find and destroy your opponent's fleet before they can destroy yours!
            </div>
            <br />
            <div id="details">
                The game is made of two 10*10 boards, one that represents the computer's board and one that represents your board.
                You will playing on the computer's board.
                At the start of the game, 5 ships are randomly placed on each board (one 5X1 ship, one 4X1 ship, two 3X1 ships, and one 2X1 ship).
                You goal is to eliminate all ships by selecting squares on the computer's board.
                If you hit a ship, the square will turn into a red cross.
                If you miss, the square will turn into a green check mark, reminding you that this location has already been explored.
            </div>
            <br />
            <div id="details2">
                You and the computers will take turns. You will go first. If the computer hits your ship, the square will turn into a red cross.
                "Reset" button let you start a new game.
                Enjoy!
            </div>
            <br />
            <div id="normal-version">
                Normal Mode: classic version where both your board and computer's board are shown.
            </div>
            <br />
            <div id="freeplay-version">
                Free Play Mode: only shows the computer's board.
            </div>
        </div>
    )
}