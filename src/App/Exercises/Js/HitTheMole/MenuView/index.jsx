// import { Button } from '../../../Components/Button';

import { Button } from '../Button';
import { Menu } from '../Menu';
import { SelectButtons } from '../SelectButtons';


export const MenuView = ({
    setTime,
    setNumberOfMoles,
    setInitialTime,
    setScore,
    setGameStarted,
    setGameStopped,
}) => {
    const handleStartClick = () => {
        setScore(0);
        setGameStopped(false);
        setGameStarted(true);
    };

    const handleTimeClick = (value) => {
        setTime(value);
        setInitialTime(value);
        setGameStopped(false);
    };

    const handleMoleClick = (value) => {
        setNumberOfMoles(value);
    };
    return (
        <div className='htm-menu'>
            <Menu label="CZAS GRY">
                <SelectButtons
                    // state odpowiedzialny za czas gry
                    setValue={handleTimeClick}
                    options={[
                        { value: 60, label: '1 minuta', isActive: true },
                        { value: 120, label: '2 minuty', isActive: false },
                        { value: 180, label: '3 minuty', isActive: false },
                    ]}
                />
            </Menu>
            <Menu label="LICZBA KRETÓW">
                <SelectButtons
                    setValue={handleMoleClick}
                    options={[
                        { value: 1, label: '1 kret', isActive: true },
                        { value: 2, label: '2 krety', isActive: false },
                        { value: 3, label: '3 krety', isActive: false },
                    ]}
                />
            </Menu>
            <Menu label="PRZYCISKI STERUJĄCE">
                <Button onClick={handleStartClick}>START</Button>
            </Menu>
        </div>
    );
};