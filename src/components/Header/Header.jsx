import React, { useState } from 'react'
import './Header.scss';
import logo from '../Header/header-decoration.svg';
import { SimpleModal } from '../SimpleModal/SimpleModal';
import { Formik, Form, Field, ErrorMessage } from "formik";
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
})

export default function Header() {
    const [modalInfoisOpen, setModalInfoOpen] = useState(false);
    return (
        <header className='header'>

            <div className='container'>
                <div className='header-row'>

                    <div className='header-logo'>
                        <div className="logo-wrapper">
                            <img src={logo} alt="logo" style={{ height: "100px" }} />
                        </div>
                        <span className="logo-title">DubaiRealty</span>

                        <span className="logo-text">Real Estate</span>

                    </div>
                    <nav class='navigation'>
                        <ul className='navbar'>
                            <li className='dropdown'>
                                <a href="/">Buy</a>
                                <ul>
                                    <li><a href="/">Category number one</a></li>
                                    <li><a href="/">Apartments in Dubai</a></li>
                                    <li><a href="/">Category number twenty five</a></li>
                                </ul>
                            </li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </nav>
                    <div className='user_contacts'>
                        <button className='header__button'
                            onClick={() => setModalInfoOpen(true)}
                        >Book a consultation</button>
                        <SimpleModal
                            isOpen={modalInfoisOpen}
                            onClose={() => setModalInfoOpen(false)}
                        ><div className='modal-data'>
                                <div className='modal-info'>
                                    <span className='modal-title'>Leave your contacts</span>
                                    <span className='modal-description'>we will contact you within three hours</span>
                                </div>

                                <Formik
                                    initialValues={{
                                        name: "",
                                        phone: "",
                                    }}
                                    validationSchema={validationSchema}
                                >
                                    {() => (
                                        <Form className='modal-user-form'>
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
                    </div>
                </div>
            </div>
        </header>
    )
}
