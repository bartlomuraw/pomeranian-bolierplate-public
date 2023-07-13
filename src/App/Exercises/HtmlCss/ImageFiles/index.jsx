import './styles.css';

import logoPomeranian from './pomeranian-icon.png';

import logoIkea from './logo-ikea.svg';

import las from './las.jpg'

export function ImageFiles() {
  return <div>

    <img src={logoPomeranian} alt="Pomeranian logo" />
    <img src={logoIkea} alt="Ikea logo" />
    <img src={las} alt="Las" />


  </div>
}
