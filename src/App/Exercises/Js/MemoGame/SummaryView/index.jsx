import { formatTime } from '../GameView';

export const SummaryView = ({ score, time, myTime, amount, initialTime }) => {
    return (
        <div className="mg-summary">
            {score > 0 &&
                `Gratulacje! Odkryłeś/aś wszystkie pola w czasie ${time} przy ${score} ruchach.`}
            {score === 0 &&
                `Spróbuj jeszcze raz!`}
        </div>
    );
};

