import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div>
      <div class="welcome">Welcome to Battleship Game!</div>;
      <Link to={"/standardGameBoard"} class="standardGame">
        Standard
      </Link>
      <Link to={"/freePlayGameBoard"} class="freePlayGameBoard">
        Free Play
      </Link>
    </div>
  );
}
