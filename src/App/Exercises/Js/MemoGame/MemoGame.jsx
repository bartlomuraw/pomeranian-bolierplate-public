import './styles.css';

import { GameView } from './GameView';
import { MenuView } from './MenuView';
import { PlaygroundView } from './PlaygoundView';
import { useState } from 'react';
import { SummaryView } from './SummaryView';

const INITIAL_TIME = 0;

export const MemoGame = () => {
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [isGameStopped, setIsGameStopped] = useState(false);
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(INITIAL_TIME);
    const [initialTime, setInitialTime] = useState(INITIAL_TIME);

    return (
        <div className='mg-wrapper'>
            <h4 className='mg-header'>
                Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
            </h4>
            {isGameStopped && <SummaryView score={score} time={initialTime} />}
            {!isGameStarted && <MenuView
                setGameStopped={setIsGameStopped}
                setGameStarted={setIsGameStarted}
            />
            }
            {isGameStarted && (
                <GameView
                    initialTime={initialTime}
                    time={time}
                    setTime={setTime}
                    score={score}
                    setGameStarted={setIsGameStarted}
                    setGameStopped={setIsGameStopped}
                />
            )}
            {isGameStarted && <PlaygroundView score={score} setScore={setScore} />}

        </div>
    );
};