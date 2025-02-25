import Player from './components/Player';
import Gamebord from './components/Gameboard';

function App() {
    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <Player initialName="player 1" symbol="X"></Player>
                    <Player initialName="player 2" symbol="O"></Player>
                </ol>

                <Gamebord></Gamebord>
            </div>
        </main>
    );
}

export default App;
