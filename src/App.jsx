import Player from './components/Player';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="player 1" symbol="X"></Player>
          <Player name="player 2" symbol="O"></Player>
        </ol>
        GAMEBOAR
      </div>
    </main>
  );
}

export default App;
