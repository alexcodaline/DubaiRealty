import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "./../../img/icons/header-decoration.svg";
import SimpleModal from "../Homepage/SimpleModal/SimpleModal.jsx";
import { ReactComponent as IconClose } from './../../img/icons/icon-close.svg'
import { ReactComponent as IconOpen } from './../../img/icons/open-icon.svg';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [modalActive, setModalActive] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

useEffect(() => {
  if (navOpen || modalActive) {
    document.body.classList.add('body-no-scroll');
  } else {
    document.body.classList.remove('body-no-scroll');
  }
  return () => {
    document.body.classList.remove('body-no-scroll');
  };
}, [navOpen, modalActive]);
  const [activeButton, setActiveButton] = useState('');
  const closeNav = () => {
    setNavOpen(false);
  };
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    setActiveButton(lng);
    i18n.changeLanguage(lng);
  };
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-row">
          <div className="header-logo">
            <a href="/">
              <div className="logo-wrapper">
                <img src={logo} alt="logo" style={{ height: "100px" }} />
              </div>
              <span className="logo-title">DubaiRealty</span>

              <span className="logo-text">Real Estate</span>
            </a>
          </div>
          <div className="mobile-btn">
            <button onClick={() => {
              setNavOpen(!navOpen);
            }}>
              {navOpen ? <IconClose size={25} /> : <IconOpen size={25} />}
            </button>
          </div>
          <nav className={navOpen ? ['navigation', 'active'].join(' ') : 'navigation'}>
            <ul className="navbar">
              <li
                onMouseEnter={() => setMenuVisible(true)}
                onMouseLeave={() => setMenuVisible(false)}
                className={`menu ${menuVisible ? "active-menu" : ""}`}
                onClick={() => setMenuVisible(!menuVisible)}>
                <span>{t('navbar-menu-buy')}</span>
                {menuVisible ?
                  <ul>
                    <li onClick={closeNav}>
                      <Link to="/category">{t('navbar-menu-buy-category-all')}</Link>
                    </li>
                    <li onClick={closeNav}>
                      <Link to="/apartments">{t('navbar-menu-buy-apartments')}</Link>
                    </li>
                    <li onClick={closeNav}>
                      <a href="/">{t('navbar-menu-buy-category-one')}</a>
                    </li>
                  </ul>
                  : null}
              </li>
              <li onClick={closeNav} className={`nav-link ${menuVisible ? "nav-link-shifted" : ""}`}>
                <Link to="/blog">{t('navbar-menu-blog')}</Link>
              </li>
              <li onClick={closeNav} className={`nav-link2 ${menuVisible ? "nav-link-shifted-2" : ""}`}>
                <a href="/">{t('navbar-menu-about')}</a>
              </li>
              <li onClick={closeNav} className={`nav-link3 ${menuVisible ? "nav-link-shifted-3" : ""}`}>
                <Link to="/contact">{t('navbar-menu-contacts')}</Link>
              </li>
            </ul>
            <div className="user-contacts">
              <button
                className="header-button"
                onClick={() => setModalActive(true)}
              >
                {t('navbar-menu-consultation')}
              </button>

              <div className="lang-navbar">
                <button className={`lang-button ${activeButton === 'en' ? 'active-button-lang' : ''}`}
                  onClick={() => changeLanguage('en')}
                >EN</button>
                <button className={`lang-button ${activeButton === 'ua' ? 'active-button-lang' : ''}`}
                  onClick={() => changeLanguage('ua')}
                >UA</button>
              </div>
              <div className="header-phone">
                <a href="tel:+380991111111">+3 (099) 111-11-11</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <SimpleModal active={modalActive} setActive={setModalActive} />
    </header>
  );
}