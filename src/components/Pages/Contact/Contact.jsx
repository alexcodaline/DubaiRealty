import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './Contact.scss'

export default function Contact() {
  const validationContact = Yup.object().shape({
    name: Yup.string()
      .min(2, "First Name should be at least 2 characters")
      .matches(/^[a-zA-Z]+$/, "Only letters are allowed")
      .required("Your name is required"),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email format"
      ),
    message: Yup.string().required("This field is required"),
  });
  return (
    <section className='contact'>
      <div className='container'>
        <div className='container-items'>
          <div className='contact-title'>
            <h4>Contact</h4>
          </div>
          <div className='contact-info'>
            <h3>Dubai, <span>UAE</span></h3>
            <p>269 King Str, 05th Floor, Utral Hosue Building,
              Dubai, VIC 3000, UAE.</p>
            <a className='contact-phone' href="tel:+99 (0) 344 956 4050">+99(0)344 956 4050</a>
            <div className='contact-email'>Email: <a href="mailto:info@sparch.com">info@sparch.com</a></div>
            <div className='contact-work-hours'>Work Hours: <span>Monday - Friday : 08h00 - 17h30</span>
            </div>
          </div>
          <div className='contact-location'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230582.0388404786!2d54.89409726088369!3d24.965349239779144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2z0JTRg9Cx0LDQuSAtINCe0LHRitC10LTQuNC90LXQvdC90YvQtSDQkNGA0LDQsdGB0LrQuNC1INCt0LzQuNGA0LDRgtGL!5e1!3m2!1sru!2sua!4v1704965547924!5m2!1sru!2sua" width="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='container-contacts'>
            <h3><span>Be in touch</span> with us</h3>
            <Formik
              initialValues={{
                name: '',
                email: '',
                message: '',
              }}
              validationSchema={validationContact}
              onSubmit={(values, actions) => {
                console.log(values);
                actions.setSubmitting(false);
              }}
            >

              {() => (
                <Form className="contacts-form">
                  <div className='form-item'>
                    <div className='field-container'>
                      <Field
                        name="name"
                        type="text"
                        className="input-field-contact"
                        placeholder="Name*"
                        label="Name"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="error-contact"
                      />
                    </div>
                    <div className='field-container'>
                      <Field
                        name="email"
                        type="email"
                        className="input-field-contact"
                        placeholder="Email*"
                        label="Email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error-contact"
                      />
                    </div>
                    <div className='field-container'>
                      <Field
                        name="subject"
                        type="text"
                        className="input-field-contact"
                        placeholder="Subject"
                        label="Subject"
                      />
                    </div>
                  </div>
                  <Field
                    name="message"
                    type="text"
                    className="input-field-message"
                    placeholder="Message*"
                    label="Message"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="error"
                  />
                </Form>
              )}
            </Formik>
            <button value="submit" className='contact-btn'>SUBMIT</button>
          </div>
        </div>
      </div>
    </section>
  )
}
