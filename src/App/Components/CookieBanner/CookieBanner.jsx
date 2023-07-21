import './styles.css';
import cookieBanner from './cookie.png';
import { useState } from "react";


function setCookieState() {
  localStorage.setItem("cookieState", 1);
}

function getCookieState() {
  return localStorage.getItem("cookieState");
}

/*export const CookieBanner = () => {
  const currentBannerState = getCookieState();
  const [showBanner, setShowBanner] = useState(!currentBannerState)

  function hideBanner() {
    setShowBanner(0)
    setCookieState()
  }

  if (!showBanner) {
    return null;
  }

  return <div id="cookie-banner">
    <div id="cookie-banner-overlay"></div>
    <div id="cookie-banner-content">
      <button onClick={hideBanner}>GIT</button>
    </div>
  </div>;
};*/




export const CookieBanner = () => {
  const currentBannerState = getCookieState();
  const [showBanner, setShowBanner] = useState(!currentBannerState)

  function hideBanner() {
    setShowBanner(0)
    setCookieState()
  }

  if (!showBanner) {
    return null;
  }
  return (
    <div>
      <div className='cookie-banner-overlay'>

      </div>
      <div className='cookie-banner'>
        <img className="floats-img-cookie" src={cookieBanner} alt="cookie" />
        <div className='cookie-use'>
          <p>
            <div className='cookie-banner-let'>
              <h2>Pozwól na pliki cookies</h2>
            </div>
            Nasza strona korzysta z ciasteczek, które umożliwiają poprawne działanie strony i pomagają nam świadczyć usługi na najwyższym poziomie. Możesz zaakceptować wykorzystanie przez nas wszystkich tych plików i przejść do strony lub dostosowaćz użycie do swoich preferencji. W tym celu kliknij przycisk po prawej stronie “dopasuj zgody”, aby następnie wybrać te które odpowiadają Twoim indywidualnym preferencjom.
          </p>
          <div className='cookie-banner-buttons'>
            <button className='cookie-banner-button1' onClick={hideBanner}>W PORZĄDKU</button>
            <button className='cookie-banner-button2'>DOPASUJ ZGODY</button>
          </div>
        </div>

      </div>
    </div>
  )
};
