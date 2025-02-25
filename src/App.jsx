import Player from './components/Player';
import Gamebord from './components/Gameboard';
import { useState } from 'react';

function App() {
    const [activePlayer, setActivePlayer] = useState('X');

    function handleSelectSquare() {
        setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'));
    }
    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialName="player 1" symbol="X" isActive={activePlayer === 'X'}></Player>
                    <Player initialName="player 2" symbol="O" isActive={activePlayer === 'O'}></Player>
                </ol>

                <Gamebord onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}></Gamebord>
            </div>
        </main>
    );
}

export default App;
