import { useEffect, useState } from "react";
import './styles.css';
import { formatTime } from '../GameView';



function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

const getRandomLetters = (amount) => {
    const shuffled = [...alphabet].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, amount);
};

const generateBoard = (size) => {
    const randomLetters = getRandomLetters(size / 2);
    const letters = randomLetters.map((letter) => {
        return {
            id: null,
            value: letter,
            isPaired: false,
        };
    });
    const mergedLetters = [...letters, ...letters];

    return shuffleArray(mergedLetters).map((obj, index) => {
        return {
            ...obj,
            id: index + 1,
        };
    });
};



export const PlaygroundView = ({ boardSize, setGameEnded, setIsGameStarted, setMyTime, time, amount, setAmount }) => {
    const [board, setBoard] = useState(generateBoard(boardSize));
    const [firstClickedFieldId, setFirstClickedFieldId] = useState(null);
    const [secondClickedFieldId, setSecondClickedFieldId] = useState(null);
    const [incorrectlyPairedFields, setIncorrectlyPairedFields] = useState([]);

    const handleClick = (object) => {
        const isFirstClickedSetAndIsDifferentThanPrev =
            firstClickedFieldId && firstClickedFieldId !== object.id;

        if (isFirstClickedSetAndIsDifferentThanPrev) {
            setSecondClickedFieldId(object.id);
            resetClick(setSecondClickedFieldId);
        } else {
            setFirstClickedFieldId(object.id);
            resetClick(setFirstClickedFieldId);
        }
    };

    const resetClick = (callback) => {
        setTimeout(() => callback(undefined), 1000);
    };


    useEffect(() => {
        if (firstClickedFieldId && secondClickedFieldId) {
            setAmount(amount + 1);
            const firstClickedField = board.find(item => item.id === firstClickedFieldId);
            const secondClickedField = board.find(item => item.id === secondClickedFieldId);

            const firstClickedFieldValue = firstClickedField.value;
            const secondClickedFieldValue = secondClickedField.value;

            if (firstClickedFieldValue === secondClickedFieldValue) {
                setBoard(
                    board.map((field) => {
                        return {
                            ...field,
                            isPaired: field.isPaired
                                ? true
                                : firstClickedFieldId === field.id ||
                                secondClickedFieldId === field.id,
                        };
                    })
                );
            } else {
                setIncorrectlyPairedFields([firstClickedFieldId, secondClickedFieldId]);
                resetClick(() => {
                    setFirstClickedFieldId(null);
                    setSecondClickedFieldId(null);
                    setIncorrectlyPairedFields([]);

                });
            }
        }
    }, [firstClickedFieldId, secondClickedFieldId]);

    useEffect(() => {
        if (board.every(item => item.isPaired)) {
            setGameEnded(true);
            setMyTime(formatTime(time));
        }
    }, [board]);

    return (
        <div className='mg-board'>
            {board.map((element) => {
                const isClicked =
                    firstClickedFieldId === element.id ||
                    secondClickedFieldId === element.id;
                const isIncorrectlyPaired = incorrectlyPairedFields.includes(element.id);
                const canShowValue = isClicked || element.isPaired;
                const clickFieldClassName = isClicked ? 'mg-field-clicked' : '';
                const pairedFieldClassName = element.isPaired ? 'mg-field-paired' : '';
                const incorrectFieldClassName = isIncorrectlyPaired ? 'mg-field-incorrect' : '';
                return (
                    <div
                        key={element.id}
                        className={`mg-board-field ${clickFieldClassName} ${pairedFieldClassName} ${incorrectFieldClassName}`}
                        onClick={() => handleClick(element)}
                    >
                        {canShowValue && element.value}
                    </div>
                );
            })}
        </div>
    );
};

