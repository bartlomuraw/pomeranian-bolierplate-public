import './index.css'

export const Button = ({ children, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`button_memo ${isActive ? 'button---active' : ''}`}>
            {children}
        </button>
    );
};

