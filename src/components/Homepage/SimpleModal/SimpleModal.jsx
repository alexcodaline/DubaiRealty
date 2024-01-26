import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ReactComponent as IconClose } from '../../../img/icons/icon-close.svg'
import "./SimpleModal.scss";
import { useTranslation } from 'react-i18next';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Name should be at least 4 characters")
        .matches(/^[a-zA-Z]+$/, "Only letters are allowed")
        .required("Your name is required"),
    phone: Yup.string()
        .matches(/^\+?[0-9]+$/, "Phone must contain only numbers")
        .min(10, "Your phone number should be at least 10 digits")
        .max(13, "Your phone number should not exceed 12 digits")
        .required("Phone Number is required"),
});
export default function SimpleModal({ active, setActive }) {
    const { t } = useTranslation();
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>

            <div className={active ? 'modal-content active' : 'modal-content'} onClick={e => e.stopPropagation()}>
                <button className='modal-close-button' onClick={() => setActive(false)}>
                    <IconClose />
                </button>
                <div className="modal-info">
                    <span className="modal-title">{t('form-title')}</span>
                    <span className="modal-description">
                    {t('modal-description')}
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
                                <label htmlFor="name">{t('form-placeholder-name')}</label>
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
                                <label htmlFor="name">{t('form-placeholder-phone')}</label>
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
                                <button type="submit">{t('form-placeholder-button')}</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}