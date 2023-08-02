// import { Button } from '../../../Components/Button';
import { Button } from '../Button';
import { Menu } from '../Menu';

export const GameView = ({ setGameStarted }) => {
    return (
        <div className='htm-menu'>
            <Menu label="CZAS DO KOŃCA">
                <Button>1:35</Button>
            </Menu>
            <Menu label="WYNIK">
                <Button>16</Button>

            </Menu>
            <Menu label="PRZYCISKI STERUJĄCE">
                <Button onClick={() => setGameStarted(false)}>STOP</Button>
            </Menu>
        </div>
    );
};