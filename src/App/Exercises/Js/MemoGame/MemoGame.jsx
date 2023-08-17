import './styles.css';

import { formatTime } from './GameView';
import { GameView } from './GameView';
import { MenuView } from './MenuView';
import { PlaygroundView } from './PlaygoundView';
import { useState } from 'react';
import { SummaryView } from './SummaryView';

const INITIAL_TIME = 0;

export const MemoGame = () => {
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [isGameStopped, setIsGameStopped] = useState(false);
    const [isGameEnded, setGameEnded] = useState(false);
    const [myTime, setMyTime] = useState(0);
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(INITIAL_TIME);
    const [initialTime, setInitialTime] = useState(INITIAL_TIME);
    const [boardSize, setBoardSize] = useState();
    const [amount, setAmount] = useState(0);

    return (
        <div className='mg-wrapper'>
            <h4 className='mg-header'>
                Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
            </h4>
            {isGameStopped && <SummaryView score={amount} time={formatTime(time)} />}
            {!isGameStarted && (
                <MenuView
                    setGameStopped={setIsGameStopped}
                    setGameStarted={setIsGameStarted}
                    setBoardSize={setBoardSize}
                    amount={amount}
                    setAmount={setAmount}
                />
            )}
            {isGameStarted && (
                <GameView
                    amount={amount}
                    setAmount={setAmount}
                    initialTime={initialTime}
                    time={time}
                    setTime={setTime}
                    score={score}
                    setGameStarted={setIsGameStarted}
                    setGameStopped={setIsGameStopped}
                />
            )}
            {isGameStarted && (
                <PlaygroundView
                    boardSize={boardSize}
                    score={score}
                    setScore={setScore}
                    setAmount={setAmount}
                    amount={amount}
                    setGameEnded={setGameEnded}
                    setMyTime={setMyTime}
                    time={time}
                    setIsGameStarted={setIsGameStarted}
                />
            )}

        </div>
    );
};