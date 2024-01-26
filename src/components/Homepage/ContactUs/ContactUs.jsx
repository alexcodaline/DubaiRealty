import React from 'react'
import './ContactsUs.scss'
import { useTranslation } from 'react-i18next';



export default function ContactUs() {
    const { t } = useTranslation();
    return (
        <section className='contact-us'>
            <div className="container">
                <div className='contact-form'>
                    <div className="contact-form-container">
                        <span className='form-question'>{t('contact-desc')}</span>
                        <span className='form-title'>{t('contact-title')}</span>
                        <div className='form-submit'>
                            <input type="text" placeholder={t('contact-email')} />
                            <button type='submit'>{t('form-placeholder-button')}</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
