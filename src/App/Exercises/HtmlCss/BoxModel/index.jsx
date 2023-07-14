import './styles.css';

export function BoxModel() {
  const isVisible = true;
  return (
    <div>
      BoxModel:
      <div className="div_nr1">Przykładowy div</div>
      <p className="p_nr1">Przykładowy paragraf</p>
      <h1 className="h1_nr1">Przykładowy h1</h1>
      <span className="span_nr1">Przykładowy span</span>

      <p>
        <div className="div_nr1">Przykładowy div</div>
        przykładowy tekst
        <span className="span_nr1">Przykładowy span</span>
      </p>
      {/* IF statement */}
      <div style={{ display: "none" }} className="div_nr1">
        Przykładowy div - display: none
      </div>
      {/* <div className="displayNone div_nr1">Przykładowy div - display: none</div> */}
      {isVisible && (
        <div className="div_nr1">Przykładowy div - conditional rendering</div>
      )}
      {!isVisible && (
        <div className="div_nr1">Przykładowy div - !conditional rendering</div>
      )}

      {/*Overflow*/}
      <div className="div_nr2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta vitae debitis molestias, et blanditiis quae aliquam praesentium eum asperiores at repellendus quas maiores explicabo fuga tenetur accusantium voluptates voluptatum.
      </div>
      {/*CSS units*/}
      <div clasName="css_units_wrapper">
        <div className="div_nr1 css units_1">Przykładowy div 1</div>
        <div className="div_nr1 css units_1">Przykładowy div 2</div>
        <div className="div_nr1 css units_1">Przykładowy div 3</div>
        <div className="div_nr1 css units_1">Przykładowy div 4</div>
      </div>


    </div>
  );
}
