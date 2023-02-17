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
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
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

/* <img src="/assets/img/icons/menu.svg" alt="menu logo" /> */

/* <div className="navigation-bar__menu"></div> */
//  <ul className="navigation-bar__logo-active">
//       <li>
//         <a href="/" className="site-bar">
//           Homepage
//         </a>
//       </li>
//       <li>
//         <a href="/myrecipes">My recipes</a>
//       </li>
//       // <li className="arrow">
//       //   <a href="/categories">Categories</a>
//       //   <i className="fa-sharp fa-solid fa-chevron-down"></i>
//       // </li>;
