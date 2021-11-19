import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div>
      <div class="welcome">Welcome to Battleship Game!</div>;
      <div class="links">
        <Link to={"/GameRule"} class="GameRule">
          Game Rule
        </Link>
        <Link to={"/standardGameBoard"} class="standardGame">
          Standard
        </Link>
        <Link to={"/freePlayGameBoard"} class="freePlayGameBoard">
          Free Play
        </Link>
      </div>
    </div>
  );
}
