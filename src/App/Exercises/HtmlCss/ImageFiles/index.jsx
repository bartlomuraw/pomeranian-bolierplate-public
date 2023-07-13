import './styles.css';

import logoPomeranian from './pomeranian-icon.png';

import logoIkea from './logo-ikea.svg';

import las from './las.jpg'
import { RoundImage } from '../../../Components/RoundImage/RoundImage';

export function ImageFiles() {
  return <div>

    <img src={logoPomeranian} alt="Pomeranian logo" />
    <img src={logoIkea} alt="Ikea logo" />
    <img src={las} alt="Las" />

    <RoundImage src={logoIkea} size="300px" />

  </div>
}
