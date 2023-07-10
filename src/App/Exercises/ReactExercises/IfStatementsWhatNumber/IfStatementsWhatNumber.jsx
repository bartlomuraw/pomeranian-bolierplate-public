import React from 'react';

import './style.css';

export function IfStatementsWhatNumber() {
  const [klikniec, setKlikniec] = React.useState(0);
  function handleOnClick(event) {
    event.preventDefault();
    setKlikniec(klikniec + 1);

  }

  return (
    <div className="if-statements-what-number">
      <h1>Jaką jestem liczbą?</h1>
      <button type="button" onClick={handleOnClick}>Start {klikniec} liczba</button>
    </div>
  );

}