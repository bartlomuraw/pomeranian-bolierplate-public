import { formatTime } from '../GameView';

export const SummaryView = ({ score, time }) => {
    return (
        <div className="mg-summary">
            Gratulacje! Twój wynik to {score} par w czasie {formatTime(time)}.
        </div>
    );
};
