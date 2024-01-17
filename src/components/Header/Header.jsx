import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "./../../img/icons/header-decoration.svg";
import { SimpleModal } from "../Homepage/SimpleModal/SimpleModal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ReactComponent as IconClose } from './../../img/icons/icon-close.svg'
import { ReactComponent as IconOpen } from './../../img/icons/open-icon.svg';

import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "First Name should be at least 4 characters")
    .matches(/^[a-zA-Z]+$/, "Only letters are allowed")
    .required("Your name is required"),
  phone: Yup.string()
    .matches(/^\+?[0-9]+$/, "Phone must contain only numbers")
    .min(10, "Your phone number should be at least 10 digits")
    .max(13, "Your phone number should not exceed 12 digits")
    .required("Phone Number is required"),
});

export default function Header() {
  const [modalInfoisOpen, setModalInfoOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (navOpen) {
      document.body.classList.add('body-no-scroll');
    } else {
      document.body.classList.remove('body-no-scroll');
    }
    return () => {
      document.body.classList.remove('body-no-scroll');
    };
  }, [navOpen]);
  const closeNav = () => {
    setNavOpen(false);
  };
  return (
    <header className="header">
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
                <span>Buy</span>
                {menuVisible ?
                  <ul>
                    <li onClick={closeNav}>
                      <Link to="/category">Category number twenty five</Link>
                    </li>
                    <li onClick={closeNav}>
                      <a href="/">Apartments in Dubai</a>
                    </li>
                    <li onClick={closeNav}>
                      <a href="/">Category number one</a>
                    </li>
                  </ul>
                  : null}
              </li>
              <li onClick={closeNav}>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li onClick={closeNav}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <div className="user-contacts">
              <button
                className="header-button"
                onClick={() => setModalInfoOpen(true)}
              >
                Book a consultation
              </button>
              <SimpleModal
                isOpen={modalInfoisOpen}
                onClose={() => setModalInfoOpen(false)}
              >
                <div className="modal-data">
                  <div className="modal-info">
                    <span className="modal-title">Leave your contacts</span>
                    <span className="modal-description">
                      we will contact you within three hours
                    </span>
                  </div>

                  <Formik
                    initialValues={{
                      name: "",
                      phone: "",
                    }}
                    validationSchema={validationSchema}
                  >
                    {() => (
                      <Form className="modal-user-form">
                        <div className="input-container">
                          <label htmlFor="name">Name</label>
                          <Field
                            name="name"
                            type="text"
                            className="input-field"
                            placeholder=""
                            label="Name"
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="error"
                          />
                        </div>
                        <div className="input-container">
                          <label htmlFor="name">Phone</label>
                          <Field
                            name="phone"
                            type="number"
                            className="input-field"
                            placeholder=""
                          />
                          <ErrorMessage
                            name="phone"
                            component="div"
                            className="error"
                          />
                        </div>
                        <div className="model-submit">
                          <button type="submit">SEND</button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </SimpleModal>
              <div className="header-phone">
                <a href="tel:+380991111111">+3 (099) 111-11-11</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
