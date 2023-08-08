import { Button } from '../Button';
import { Menu } from '../Menu';
import { SelectButtons } from '../SelectButtons';

export const MenuView = ({ setGameStarted, setGameStopped }) => {
    const handleStartClick = () => {
        setGameStopped(false);
        setGameStarted(true);
    }
    return (
        <div className='mg-menu'>
            <Menu label="LICZBA ELEMENTÓW">
                <SelectButtons
                    options={[
                        { value: 1, label: '8 elementów', isActive: true },
                        { value: 2, label: '16 elementów', isActive: false },
                        { value: 3, label: '20 elementów', isActive: false },
                    ]}
                />
            </Menu>
            <Menu label="PRZYCISKI STERUJĄCE">
                <Button onClick={handleStartClick}>START</Button>
            </Menu>
        </div>
    )
}