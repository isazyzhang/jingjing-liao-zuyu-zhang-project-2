import "./GameRule.css";

export default function GameRule() {
  return (
    <div>
      <div class="gameRule">Battleship Game Rule</div>
      <p>
        A game of Battleship is made up of two 10X10 boards, one that represents
        the player’s board and one that represents the opponents.
      </p>
      <p>
        At the start of the game, 5 ships are randomly placed on each board (one
        5X1 ship, one 4X1 ship, two 3X1 ships, and one 2X1 ship).{" "}
      </p>
      <p>
        During the game, you and an AI will take turns (the player always goes
        first). On your turn, you will select a square on your opponent’s board.
        On your opponent’s turn, the AI will randomly select a square on your
        grid.
      </p>
      <p>
        If you or your opponent hit a ship, then mark that board with a color
        and symbol, and the score you get will add one. If you or your opponent
        miss, then mark a spot on the board to remind the players where on the
        board they have attempted.{" "}
      </p>
      <p>
        The AI will not try to hit the same place more than once and the user
        should not be able to select the same spot more than once, otherwise you
        will get an alert.
      </p>
      <p>
        The winner is the one whose score reaches up to five, which means
        hitting all the ships. And winning message will pop up on the screen.
      </p>
      <p>
        At the top of screen, there is a reset button which can start a new game
        of Battleship
      </p>
      <p class="option">Game Option</p>
      <p>A standard game: you and AI will compete with each other.</p>
      <p>A free play game: you will freely play the game by yourself.</p>
    </div>
  );
}
