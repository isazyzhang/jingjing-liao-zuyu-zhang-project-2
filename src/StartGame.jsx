import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function StartGame() {

    return (
        <div>
            <button>
                <Link to={"/normalGame"}>Normal Game</Link>
            </button>
            <button>
                <Link to={"/freeplay"}>Free Play</Link>
            </button>
        </div>
    )
}