import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__text">
        <img
          src="/assets/img/horizontal-logo.svg"
          alt="Appetite logo"
          width={200}
        />
        <p>
          When you open you mind to learning, experimenting and improving, you
          will be more accepting of new textures, flavours and eventually fall
          in love with them. “To eat is a necessity, but to eat intelligently is
          an art.”
        </p>
        <p>François de la Rochefoucauld.</p>
      </div>
      <div className="footer__creators-links">
        <a href="https://github.com/Alphenx" target={'_blank'} rel="noreferrer">
          <i className="fa-brands fa-github"></i>Alphenx
        </a>

        <a
          href="https://github.com/Lara-Vel"
          target={'_blank'}
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i>Lara Vel
        </a>

        <a
          href="https://github.com/Enrococo"
          target={'_blank'}
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i>Enrococo
        </a>
      </div>
      <div className="footer__copyright">
        <img src="/assets/img/icons/info.svg" width={20} alt="Copyright icon" />
        <p>2023 Appetite - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
