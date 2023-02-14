const NavBar = () => {
  return (
    <nav className="navigation-bar">
      <div className="navigation-bar__logo">
        <img src="/assets/img/horizontal-logo.svg" alt="logo" />
      </div>
      <ul className="navigation-bar__logo-active">
        <li>
          <a href="/" className="site-bar">
            Homepage
          </a>
        </li>
        <li>
          <a href="/myrecipes">My recipes</a>
        </li>

        <li className="arrow">
          <a href="/categories">Categories</a>
          <i className="fa-sharp fa-solid fa-chevron-down"></i>
        </li>
      </ul>
      <div className="navigation-bar__menu">
        <img src="/assets/img/icons/menu.svg" alt="menu logo" />
      </div>
    </nav>
  );
};

export default NavBar;
