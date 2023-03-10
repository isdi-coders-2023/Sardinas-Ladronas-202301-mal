import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './NavBar.css';
import { useState } from 'react';
import { SidebarData } from '../../mocks/SidebarData';

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="nav-bar">
        <nav className="nav-menu">
          <div className={sidebar ? 'nav-menu__logo active' : 'nav-menu__logo'}>
            <img src="/assets/img/horizontal-logo.svg" alt="logo" />
          </div>
          <ul
            className={sidebar ? 'nav-menu__items active' : 'nav-menu__items'}
          >
            {SidebarData.map((item) => {
              return (
                <li key={item.title} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul
            data-testid="burger"
            className="nav-menu__icons"
            onClick={showSidebar}
          >
            <li
              className={
                sidebar ? 'nav-menu__toggle active' : 'nav-menu__toggle'
              }
            >
              <Link to="#" className="menu-bars">
                <FaIcons.FaBars />
              </Link>
            </li>
            <li
              className={sidebar ? 'nav-menu__close' : 'nav-menu__close active'}
            >
              <Link to="#" className="menu-close">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
