import React from 'react';

import './styles/header.css';

import { Logo } from '../Components/Logo/Logo';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import ToggleArrow from '../Images/toggle-arrow.svg';

export function AppHeader() {
  function handleClickButton() {
    console.log('Button clicked')
  }
  return (
    <header>
      <Logo />
      <div className="header-title">
        <div>
          <button onClick={() => handleClickButton('I am settings button')}>
            <SettingIcon />
          </button>
        </div>
        <div className='header-personal-info'>
          <p>Bartek</p>
          <p>Kursant</p>
        </div>
        <div className="toggle-arrow">
          <buttno onClick={() => handleClickButton('I am toggle button')}>
            <img src={ToggleArrow} alt="toggle-arrow" />
          </buttno>
        </div>


      </div>
    </header >
  );
}
