import './styles.css';
import { DashboardCard } from '../Components/DashboardCard';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { EditIcon } from '../Components/Icons/EditIcon';

export const Dashboard = () => {
  const dashboardData = [
    {
      id: 1,
      title: 'Moje CV',
      description: 'podgląd cv wraz z doświadczeniem',
      icon: <CalendarIcon />,
    },
    {
      id: 2,
      title: 'Ćwiczenia',
      description: 'wszystkie wykonane ćwiczenia',
      icon: <EditIcon />,
    },
    {
      id: 3,
      title: 'Blog',
      description: 'wpisy blogowe o technologii front-end',
      icon: <CalendarIcon />,
    },

    {
      id: 4,
      title: 'Tech Stack',
      description: 'stack technologiczny realizowany na kursie',
      icon: <CalendarIcon />,
    },
    {
      id: 5,
      title: 'FAQ',
      description: 'odpowiedzi na najczęstsze pytania',
      icon: <CalendarIcon />,
    },
  ];

  return (
    <div className="dashboard">
      <h2 className='dashboard-header'>👋 Hej, tu Bartek!</h2>
      <p className='dashboard-description'>
        Poniżej znajdziesz najważniejsze informacje na temat mojej działalności.
      </p>
      <div className="dashboard-cards-wrapper">
        {dashboardData.map((element) => {
          return (
            <DashboardCard
              key={element.id}
              title={element.title}
              description={element.description}
              icon={element.icon}
            />
          );
        })}
      </div>
      <div className='dashboard-personal-info'></div>
      <p>Personal Info</p>
    </div>

  );
};
