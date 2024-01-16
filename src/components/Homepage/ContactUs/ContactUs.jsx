import React from 'react'
import './ContactsUs.scss'

export default function ContactUs() {
    return (
        <section className='contact-us'>
            <div className="container">
                <div className='contact-form'>
                    <div className="contact-form-container">
                        <span className='form-question'>Do you have any questions?</span>
                        <span className='form-title'>Contact us</span>
                        <div className='form-submit'>
                            <input type="text" placeholder='Enter your email' />
                            <button type='submit'>Send</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
