import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import './Clients.scss'
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay'
import 'swiper/scss/effect-coverflow';
import client1 from "../../../img/clients/client1.webp"
import client2 from "../../../img/clients/client2.webp"


export default function Clients() {
    const { t } = useTranslation();
    return (
        <section className='clients'>
            <div className='container'>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    scrollbar={false}
                    slidesPerView={1}
                    centeredSlides={false}
                    slidesPerGroupSkip={2}
                    coverflowEffect={{
                        rotate: 10,
                        stretch: -100,
                        depth: 150,
                        modifier: 1,
                        slideShadows: false,
                        updateSize: 20,
                    }}
                    spaceBetween={1}
                    style={{
                        '--swiper-navigation-color': '#fcd54c',
                        '--swiper-pagination-color': '#fcd54c',
                        '--swiper-pagination-bottom': '0px',
                    }}
                    speed={750}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{ delay: 4000 }}
                    navigation={false}
                    modules={[Pagination, Autoplay, EffectCoverflow]}
                    loop={true}
                    className='swiper-clients'
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 5,
                        },
                        769: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                        1201: {
                            slidesPerView: 4,
                            spaceBetween: 5,
                        }
                    }}
                >
                    {[...Array(4)].map((_, index) => (
                        <React.Fragment key={`slide-group-${index}`}>
                            <SwiperSlide key={`slide-${index}-1`}
                            >
                                <div className='swiper-slide-client'>
                                    <div className='client-info'>
                                        <img className='client-photo' src={client1} alt="client" />
                                        <span className='client-photo-decortion'>”</span>
                                    </div>
                                    <div className='client-block-desc'>
                                        <span className='client-name'>{t('client-name')}</span>
                                        <span className='client-about'>{t('client-job')} <span>Paul.com</span></span>
                                        <p className='client-desc'>{t('client-desc')}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={`slide-${index}-2`}>
                                <div className='swiper-slide-client'>
                                    <div className='client-info'>
                                        <img className='client-photo' src={client2} alt="client" />
                                        <span className='client-photo-decortion'>”</span>
                                    </div>
                                    <div className='client-block-desc'>
                                    <span className='client-name'>{t('client-name2')}</span>
                                        <span className='client-about'>{t('client-job')} <span>Apple inc.</span></span>
                                        <p className='client-desc'>{t('client-desc2')}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </React.Fragment>
                    ))}
                </Swiper>
            </div>
        </section >
    )
}
