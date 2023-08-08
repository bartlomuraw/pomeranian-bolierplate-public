import { useEffect } from 'react';
import { Button } from '../Button';
import { Menu } from '../Menu';

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const formattedTime = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    return formattedTime;
}
export { formatTime };

export const GameView = ({ initialTime, time, setTime, score, setGameStarted, setGameStopped }) => {
    const handleStopClick = () => {
        setTime(initialTime);
        setGameStarted(false);
        setGameStopped(true);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [time, setTime, setGameStopped]);

    const formattedTime = formatTime(time);
    // useEffect(() => {
    //     const timeoutId = setTimeout(() => {
    //         setTime(time + 1);
    //     }, 1000);
    //     return () => clearTimeout(timeoutId);
    // }, [time]);

    return (
        <div className='mg-menu'>
            <Menu label="CZAS GRY">
                <Button>{formattedTime}</Button>
            </Menu>
            <Menu label="LICZBA RUCHÓW">
                <Button>{score}</Button>
            </Menu>
            <Menu label="PRZYCISKI STERUJĄCE">
                <Button onClick={handleStopClick}>PASS</Button>
            </Menu>
        </div>
    )
}