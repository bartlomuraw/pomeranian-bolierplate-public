import { useState } from "react";


export function FAQ() {
    const QUESTIONS = [
        {
            question: 'Jak mogę zapisać się na szkolenie1?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque obcaecati nam,'
        },
        {
            question: 'Jak mogę zapisać się na szkolenie2?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque obcaecati nam,'
        },
        {
            question: 'Jak mogę zapisać się na szkolenie3?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque obcaecati nam,'
        },
        {
            question: 'Jak mogę zapisać się na szkolenie4?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque obcaecati nam,'
        },
    ];
    return (
        <div>
            {QUESTIONS.map((el) => (
                <QuestionComponent question={el.question} answer={el.answer} />
            ))}
        </div>
    );
};

const QuestionComponent = ({ question, answer }) => {
    const [isVisible, setIsVisible] = useState(false);
    const handleClick = () => {
        setIsVisible(!isVisible);
    };
    return (
        <div>
            <h3 onClick={handleClick}>{question}</h3>
            <p>{isVisible && answer}</p>
        </div>

    );
};
