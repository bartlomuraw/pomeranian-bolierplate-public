import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';



export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink to="dashboard">
              <div className="aside-row">
                <HouseIcon />
                Dashboard
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="blocks">
              <div className="aside-row">
                <ElementIcon />
                Bloki
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="exercises">
              <div className="aside-row">
                <EditIcon />
                Ćwiczenia
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="cv">
              <div className="aside-row">
                <PersonalCardIcon />
                CV
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="calendar">
              <div className="aside-row">
                <CalendarIcon />
                Calendar
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="blog">
              <div className="aside-row">
                <CalendarIcon />
                Blog
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="faq">
              <div className="aside-row">
                <EditIcon />
                FAQ
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
