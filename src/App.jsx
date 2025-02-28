import Player from './components/Player';
import Gamebord from './components/Gameboard';
import GameOver from './components/GameOver';
import Log from './components/Log';
import { useState } from 'react';
import { WINNING_COMBINATIONS } from './winning-combination';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X';

    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
    }

    return currentPlayer;
}

function App() {
    const [players, setPlayers] = useState({
        X: 'Player1',
        O: 'Player2',
    });

    function handlePlayerNameChange(symbol, newName) {
        setPlayers((prvPlayers) => {
            return {
                ...prvPlayers,
                [symbol]: newName,
            };
        });
    }

    const [gameTurns, setGameTurns] = useState([]);
    //const [hasWinner, setHasWinner] = useState(false);

    //const [activePlayer, setActivePlayer] = useState('X');

    const activePlayer = deriveActivePlayer(gameTurns);

    let gameBoard = [...initialGameBoard.map((array) => [...array])];

    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    let winner;

    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

        if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
            winner = players[firstSquareSymbol];
        }
    }

    const hasDraw = gameTurns.length === 9 && !winner;

    function handleSelectSquare(rowIndex, colIndex) {
        //setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'));
        setGameTurns((prevTurns) => {
            const currentPlayer = deriveActivePlayer(prevTurns);

            const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];

            return updatedTurns;
        });
    }

    function handleRestart() {
        setGameTurns([]);
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player
                        initialName="player 1"
                        symbol="X"
                        isActive={activePlayer === 'X'}
                        onChangeName={handlePlayerNameChange}></Player>
                    <Player
                        initialName="player 2"
                        symbol="O"
                        isActive={activePlayer === 'O'}
                        onChangeName={handlePlayerNameChange}></Player>
                </ol>
                {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}></GameOver>}
                <Gamebord onSelectSquare={handleSelectSquare} board={gameBoard}></Gamebord>
            </div>
            <Log turns={gameTurns} />
        </main>
    );
}

export default App;
