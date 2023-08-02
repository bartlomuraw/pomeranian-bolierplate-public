// import { Button } from '../../../Components/Button';

import { Button } from '../Button';
import { Menu } from '../Menu';
import { SelectButtons } from '../SelectButtons';


export const MenuView = ({ setGameStarted }) => {
    return (
        <div className='htm-menu'>
            <Menu label="CZAS GRY">
                <SelectButtons
                    options={[
                        { value: 1, label: '1 minuta', isActive: true },
                        { value: 2, label: '2 minuty', isActive: false },
                        { value: 3, label: '3 minuty', isActive: false },
                    ]}
                />
            </Menu>
            <Menu label="LICZBA KRETÓW">
                <SelectButtons
                    options={[
                        { value: 1, label: '1 kret', isActive: true },
                        { value: 2, label: '2 krety', isActive: false },
                        { value: 3, label: '3 krety', isActive: false },
                    ]}
                />
            </Menu>
            <Menu label="PRZYCISKI STERUJĄCE">
                <Button onClick={() => setGameStarted(true)}>START</Button>
            </Menu>
        </div>
    );
};