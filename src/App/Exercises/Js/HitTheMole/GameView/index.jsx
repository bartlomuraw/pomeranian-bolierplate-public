import { useEffect } from 'react';
import { Button } from '../Button';
import { Menu } from '../Menu';

export const GameView = ({
    initialTime,
    time,
    setTime,
    score,
    setGameStarted,
    setGameStopped,
}) => {
    const handleStopClick = () => {
        setTime(initialTime);
        setGameStarted(false);
        setGameStopped(true);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            time > 0 && setTime(time - 1);
        }, 1000);

        if (time === 0) {
            setGameStopped(true);
        }

        return () => clearTimeout(timeoutId);
    }, [time, setTime, setGameStopped]);

    return (
        <div className="htm-menu">
            <Menu label="CZAS DO KOŃCA">
                <Button>{time}</Button>
            </Menu>

            <Menu label="WYNIK">
                <Button>{score}</Button>
            </Menu>

            <Menu label="PRZYCISKI STERUJĄCE">
                <Button onClick={handleStopClick}>STOP</Button>
            </Menu>
        </div>
    );
};