import React from 'react'
import { useTranslation } from 'react-i18next';
import './About.scss'
import placeholder1 from '../../../img/decoration/placeholder1.webp'
import placeholder2 from '../../../img/decoration/placeholder2.webp'
import ContactUs from '../ContactUs/ContactUs.jsx'

export default function About() {
    const { t } = useTranslation();
    return (
        <section className='about'>
            <div className='container'>
                <div className='container-about'>
                    <div className='about-apartment'>
                        <a href="/" className='apartment-experence'>{t('about-exp')}</a>
                        <p className='apartment-title'>{t('about-title')}</p>
                        <span className='apartment-decs'>{t('about-desc')}</span>
                    </div>
                    <div className='about-video'>
                        <div className='video'>
                            <iframe className='frame-video' src="https://www.youtube.com/embed/p3fm5ADktP4?si=n1Hvwj8D2Gz8xJNk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className='about-placeholder'>
                        <div className='placeholder-quotes'>
                            <span className='quotes'>“{t('about-quotes')}” <span>{t('about-athor')}</span></span>
                        </div>
                        <div className='placeholder-container'>
                            <div className='placeholder'>
                                <img src={placeholder1} alt="placeholder" />
                                <span>{t('about-placeholder1')}</span>
                            </div>
                            <div className='placeholder'>
                                <img src={placeholder2} alt="placeholder" />
                                <span>{t('about-placeholder2')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactUs> </ContactUs >
        </section>
    )
}
