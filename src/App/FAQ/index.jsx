import './styles.css';

import { useState } from "react";


export function FAQ() {
  const QUESTIONS = [
    {
      question: 'Jak mogę zapisać się na szkolenie1?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
    },
    {
      question: 'Jak mogę zapisać się na szkolenie2?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
    },
    {
      question: 'Jak mogę zapisać się na szkolenie3?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
    },
    {
      question: 'Jak mogę zapisać się na szkolenie4?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
    },
  ];
  return (
    <div>
      {QUESTIONS.map((el) => (
        <QuestionComponent question={el.question} answer={el.answer} />
      ))}
    </div>
  );
};

const QuestionComponent = ({ question, answer }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className='ramka'>
      <h2 className='question' onClick={handleClick}>{question}</h2>
      <p className='answer'>{isVisible && answer}</p>
    </div>

  );
};



/*export function FAQ() {
    return (
      <div className="faq-wrapper">
        <p className="faq-pointer">FAQ</p>
        <p>Tutaj znajdź odpowiedzi na najczęściej zadawane pytania</p>
  
        <article className="faq-content">
          <h3 className="faq-question">
            Jak mogę zapisać się na szkolenie?
          </h3>
  
          <p className="faq-answer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque obcaecati nam,
            omnis voluptatem numquam cupiditate, illum esse rem consequuntur dolor consequatur
            deleniti nisi architecto quos repellendus! Vero quidem molestias ad.
          </p>
  
        </article>
        <article className="faq-content">
          <h3 className="faq-question">
            Jak mogę zapisać się na szkolenie?
          </h3>
  
          <p className="faq-answer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque obcaecati nam,
            omnis voluptatem numquam cupiditate, illum esse rem consequuntur dolor consequatur
            deleniti nisi architecto quos repellendus! Vero quidem molestias ad.
          </p>
  
        </article>
        <article className="faq-content">
          <h3 className="faq-question">
            Jak mogę zapisać się na szkolenie?
          </h3>
  
          <p className="faq-answer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque obcaecati nam,
            omnis voluptatem numquam cupiditate, illum esse rem consequuntur dolor consequatur
            deleniti nisi architecto quos repellendus! Vero quidem molestias ad.
          </p>
  
        </article>
        <article className="faq-content">
          <h3 className="faq-question">
            Jak mogę zapisać się na szkolenie?
          </h3>
  
          <p className="faq-answer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque obcaecati nam,
            omnis voluptatem numquam cupiditate, illum esse rem consequuntur dolor consequatur
            deleniti nisi architecto quos repellendus! Vero quidem molestias ad.
          </p>
  
        </article>
  
      </div>
    )
  };*/
