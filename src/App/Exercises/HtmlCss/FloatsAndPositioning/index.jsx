import './styles.css';

import foxImage from './fox.png';

export function FloatsAndPositioning() {

  return (
    <div className="floats-wrapper">
      <p className="floats-p1">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <p className="floats-p2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="floats-div3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus
        mattis molestiea iaculis at. Dictum varius duis at consectetur lorem
        donec.
        <p className="floats-p4-absolute">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="floats-div4">
        <img className="floats-img-fox" src={foxImage} alt="fox" />
        <p className="floats-p5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
}
