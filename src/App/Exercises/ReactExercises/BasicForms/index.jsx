import React, { useState } from 'react';
import './style.css';

const initialOrderExtras = {
  css: {
    title: 'ustawienie środowiska',
    state: false,
  },
  javascript: {
    title: 'intro do Github',
    state: false,
  },
  react: {
    title: 'materiały dodatkowe',
    state: false,
  },
};

export const BasicForms = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [email2, setEmail2] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [comment, setComment] = useState('');
  const [payment, setPayment] = useState('blik');
  const [optIn, setOptIn] = useState('false');
  const [course, setCourse] = useState('frontend');
  const [orderExtras, setOrderExtras] = useState(initialOrderExtras);

  const courseTopicList = Object.keys(initialOrderExtras)
  console.log(initialOrderExtras)

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log('IS PASSWORD THE SAME', password === password2);
    const data = {
      username: name,
      nickname,
      email,
      password,
      comment,
      payment,
      optIn,
      course,
      orderExtras,
    };
    console.log('DATA TO BE SUBMITED', data);
  }


  return (
    <>
      <form onSubmit={handleOnSubmit} className="formbasic-wrapper">

        <p>ZAMÓWIENIE PRODUKTU</p>
        <label hatmlFor="course-field">Wybierz produkt*</label>
        <select
          id="course-field"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          {/* <option value="">kurs fornt-end</option> */}
          <option value="frontend">kurs fornt-end</option>
          <option value="backend">kurs back-end</option>
          <option value="opsdata">kurs opsdata</option>
        </select>

        <fieldset>
          <legend>Wybierz formę płatności*</legend>
          <input
            type="radio"
            value="blik"
            id="payment-blik"
            checked={payment === 'blik'}
            onChange={(e) => setPayment(e.target.value)}
          />
          <label htmlFor="payment-paypal">Blik</label>
          <input
            type="radio"
            value="paypal"
            id="payment-paypal"
            checked={payment === 'paypal'}
            onChange={(e) => setPayment(e.target.value)}
          />
          <label htmlFor="payment-traditional">Paypal</label>
          <input
            type="radio"
            value="traditional"
            id="payment-traditional"
            checked={payment === 'traditional'}
            onChange={(e) => setPayment(e.target.value)}
          />
          <label htmlFor="payment-traditional">Przelew tradycyjny</label>
        </fieldset>
        <div>
          <label>Opcje dodatkowe do zamówienia</label>
          {Object.entries(initialOrderExtras).map((option) => (
            <div key={option[0]}>
              <input
                type="checkbox"
                id={option[0]}
                value={option[1].state}
                checked={orderExtras[option[0]].state}
                onChange={(e) =>
                  setOrderExtras({
                    ...orderExtras,
                    [option[0]]: {
                      title: option[1].title,
                      state: e.target.checked,
                    },
                  })
                }
              />
              <label htmlFor={option}>
                {option[1].title}
              </label>
            </div>
          ))}
        </div>


        <p>DANE DO REALIZACJI ZAMÓWIENIA</p>
        <label htmlFor="name-field">Imię i nazwisko*</label>
        <input
          id="name-field"
          type="text"
          value={name}
          placeholder="wpisz swoje imię i nazwisko"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="nickname-field">Twój pseudonim*</label>
        <input
          id="nickname-field"
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <label htmlFor="emailsend-field">Adres do wysyłki*</label>
        <input
          id="emailsend-field"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="emailown-field">Adres e-mail*</label>
        <input
          id="emailown-field"
          type="email"
          value={email2}
          onChange={(e) => setEmail2(e.target.value)}
        />
        <label htmlFor="phone-field">Numer kontaktowy*</label>
        <input
          id="phone-field"
          type="tel"
          value={phone}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required
          onChange={(e) => setPhone(e.target.value)}
        />
        <label htmlFor="comment-field">Dodatkowe uwagi do zamówienia</label>
        <textarea
          id="comment-field"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <p>ZAKŁADANIE KONTA</p>
        <fieldset>
          <legend>Chcę założyć konto razem z zamówieniem</legend>
          <input
            type='checkbox'
            id='opt-in-account'
            checkbox={optIn}
            onChange={(e) => setOptIn(e.target.checked)}
          />
          <label htmlFor="opt-in-account">zakładam konto</label>
        </fieldset>
        <label htmlFor="password-field">Moje hasło</label>
        <input
          id="password-field"
          type="password"
          value={password}
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <p>Current password: {password || '(empty)'}</p> */}
        <label htmlFor="password2-field">Powtórz hasło</label>
        <input
          id="password2-field"
          type="password"
          value={password2}
          autoComplete="off"
          onChange={(e) => setPassword2(e.target.value)}
        />
        <fieldset>
          <legend>Realizując zamówienie, akceptujesz regulamin naszego sklepu</legend>
          <input
            type='checkbox'
            id='opt-in-statute'
            checkbox={optIn}
            onChange={(e) => setOptIn(e.target.checked)}
          />
          <label htmlFor="opt-in-statute">akceptuję regulamin*</label>
        </fieldset>
        <fieldset>
          <legend>Dołącz do naszego newslettera z promocjami dla naszych klientów</legend>

          <input
            type='checkbox'
            id='opt-in-newsletter'
            checkbox={optIn}
            onChange={(e) => setOptIn(e.target.checked)}
          />
          <label htmlFor="opt-in-newsletter">zapisuję się na listę mailingową </label>
        </fieldset>
        <button>SKŁADAM ZAMÓWIENIE</button>
      </form>
    </>
  )
}