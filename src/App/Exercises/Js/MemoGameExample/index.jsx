import './styles.css';
import { useEffect, useState } from 'react';
import { GameView } from './GameView/GameView';
import { MenuView } from './MenuView/MenuView';
import { Playground } from './Playground/Playuground';

export function MemoGameExample() {
  const [isGameStarted, setGameStarted] = useState(false);
  const [isGameEnded, setGameEnded] = useState(false);

  const [timeInterval, setTimeInterval] = useState();
  const [time, setTime] = useState(0);
  const [myTime, setMyTime] = useState(0);

  const [amount, setAmount] = useState(0);
  const [boardSize, setBoardSize] = useState();

  useEffect(() => {
    if (isGameStarted) {
      const gameInterval = setInterval(() => {
        return setTime((prev) => prev + 1);
      }, 1000);
      setTimeInterval(gameInterval);
    } else {
      clearInterval(timeInterval);
      setTime(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGameStarted]);

  return (
    <div className="MemoGame">
      <h4>MEMO GAME</h4>
      <p>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </p>
      {isGameStarted ? (
        <GameView
          setGameStarted={setGameStarted}
          time={time}
          amount={amount}
          setAmount={setAmount}
        />
      ) : (
        <MenuView
          setBoardSize={setBoardSize}
          setGameStarted={setGameStarted}
          myTime={myTime}
          amount={amount}
          isGameEnded={isGameEnded}
          setAmount={setAmount}
          isGameStarted={isGameStarted}
        />
      )}
      {isGameStarted && (
        <Playground
          boardSize={boardSize}
          setGameEnded={setGameEnded}
          setGameStarted={setGameStarted}
          setMyTime={setMyTime}
          time={time}
          setAmount={setAmount}
          amount={amount}
        />
      )}
    </div>
  );
}
