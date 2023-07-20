import './styles.css';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { CSSIcon } from '../Components/Icons/CSSIcon';


const techStackData = [
  {
    title: 'CSS',
    src: require('../Images/tech-stack/css.png'),
    alt: 'CSS logo',
  },
  {
    title: 'HTML',
    src: require('../Images/tech-stack/html.png'),
    alt: 'HTML logo',
  },
  {
    title: 'typescript',
    src: require('../Images/tech-stack/ts-logo.png'),
    alt: 'TS logo',
  },
  {
    title: 'Javascript',
    src: require('../Images/tech-stack/JS.png'),
    alt: 'JS logo',
  },
  {
    title: 'React',
    src: require('../Images/tech-stack/react.png'),
    alt: 'React logo',
  },
  {
    title: 'Github',
    src: require('../Images/tech-stack/github.png'),
    alt: 'Github logo',
  },
  {
    title: 'Calendar',
    src: <CalendarIcon />,
    alt: 'Calendar logo',
  },
  {
    title: 'React',
    src: 'https://cdn.icon-icons.com/icons2/2566/PNG/512/css_icon_153522.png',
    alt: 'React logo',
  },
];


export function TechStack() {
  return (
    <div className='techstack'>
      <h2 className='techstack-title'> <b></b>Tech Stack</h2>
      <p className='techstack-description'>Poniżej znajdziesz tech stack oraz nadzędzia, jakich nauczylem się podczas kursu</p>
      <div className="techstack-cards">
        {techStackData.map((element) => {
          return (
            <div className='techstack-card'>
              {element.src && (
                <img
                  className='techstack-card-image'
                  src={element.src}
                  alt={element.alt}
                />
              )}
              {element.component && element.component}
              <p className='tech-stack-card-title'>{element.title}</p>
            </div>
          );

        })}
      </div>
    </div>
  );
}
