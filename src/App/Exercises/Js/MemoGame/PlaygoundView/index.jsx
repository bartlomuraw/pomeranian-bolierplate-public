import { useState } from "react";

const initarrayWithMemo = [
    {
        id: 1,
        hasClicked: false,
    },
    {
        id: 2,
        hasClicked: false,
    },
    {
        id: 3,
        hasClicked: false,
    },
    {
        id: 4,
        hasClicked: false,
    },
    {
        id: 5,
        hasClicked: false,
    },
    {
        id: 6,
        hasClicked: false,
    },
    {
        id: 7,
        hasClicked: false,
    },
    {
        id: 8,
        hasClicked: false,
    },
    {
        id: 9,
        hasClicked: false,
    },
    {
        id: 10,
        hasClicked: false,
    },
    {
        id: 11,
        hasClicked: false,
    },
    {
        id: 12,
        hasClicked: false,
    },
    {
        id: 13,
        hasClicked: false,
    },
    {
        id: 14,
        hasClicked: false,
    },
    {
        id: 15,
        hasClicked: false,
    },
    {
        id: 16,
        hasClicked: false,
    },
];
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}


export const PlaygroundView = ({ score, setScore }) => {
    const [arrayWithMemo, setArrayWithMemo] = useState([initarrayWithMemo]);

    const handleMemoFieldClick = (id) => {
        // Logika obsługująca kliknięcie w pole o danym ID
        // Możesz zaktualizować stan hasClicked dla tego pola w arrayWithMemo
    };
    const shuffledArray = shuffleArray([...initarrayWithMemo]);


    return (
        <div className='mg-stage'>
            {shuffledArray.map((element) => (
                <div
                    key={element.id}
                    className={`mg-stage-cell ${element.hasClicked ? 'clicked' : ''}`}
                    onClick={() => handleMemoFieldClick(element.id)}
                >
                    {/* Tu możesz wyświetlić zawartość pola, np. element.id */}
                </div>
            ))}
        </div>
    );
};

    // return (
    //     <div className='mg-stage'>
    //         {arrayWithMemo.map((element) => {
    //             return <div className='mg-stage-cell'>
    //             </div>
    //         })}
    //     </div>
    // );
