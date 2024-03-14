import Player from "./components/Player";
import Gameboard from "./components/GameBoard";

function App() {

  return (
    <main>
      <div id="game-container">
        <ol id="players">
         <Player initalName="Player 1" symbol="X"/>
         <Player initalName="Player 2" symbol="O"/>
        </ol>
        <Gameboard />
      </div>

      LOG
    </main>
  );
}

export default App
