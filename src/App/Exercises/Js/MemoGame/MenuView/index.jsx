import { Button } from '../Button';
import { Menu } from '../Menu';
import { SelectButtons } from '../SelectButtons';

export const MenuView = ({ setGameStarted, setGameStopped, setBoardSize, boardSize }) => {
    const handleStartClick = () => {
        setGameStopped(false);
        setGameStarted(true);
    }
    return (
        <div className='mg-menu'>
            <Menu label="LICZBA ELEMENTÓW">
                <SelectButtons
                    setValue={setBoardSize}
                    options={[
                        {
                            value: 8,
                            content: '8 elementów',
                            isActive: false,
                        },
                        {
                            value: 16,
                            content: '16 elementów',
                            isActive: false,
                        },
                        {
                            value: 20,
                            content: '20 elementów',
                            isActive: false,
                        },
                    ]}
                />
            </Menu>
            <Menu label="PRZYCISKI STERUJĄCE">
                <Button onClick={handleStartClick}>START</Button>
            </Menu>
        </div>
    )
}