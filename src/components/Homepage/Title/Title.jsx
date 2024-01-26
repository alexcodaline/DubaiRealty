import React, { useState } from 'react'
import "./Title.scss"
import titleDecoration from "../../../img/icons/title-decoration.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay'
import 'swiper/scss/navigation';
import 'swiper/scss/effect-fade';

export default function Title() {
    const [activeBlock, setActiveBlock] = useState(0);

    const handleSlideChange = (swiper) => {
        setActiveBlock(swiper.realIndex);
    };
    const { t } = useTranslation();
    return (
        <section className='title'>
            <div className='container'>
                <Swiper
                    onSlideChange={(swiper) => handleSlideChange(swiper)}
                    spaceBetween={30}
                    style={{
                        '--swiper-navigation-color': '#fcd54c',
                        '--swiper-pagination-color': '#fcd54c',
                    }}
                    speed={750}
                    slidesPerView={1}

                    autoplay={{ delay: 2500 }}
                    effect={'fade'}
                    navigation={true}
                    modules={[EffectFade, Navigation, Autoplay]}
                    loop={true}
                >
                    <SwiperSlide>
                        <div className='first-slide'>
                            <div className="slide-items">
                                <div className='slide-wrapper'>
                                    <img src={titleDecoration} alt="logo" />
                                </div>
                                <div className='slide-name'>
                                    <span>{t('slide-title-desc1')}</span>
                                    <p>{t('slide1-title-name')}<span>{t('slide1-title-name2')}</span>{t('slide1-title-name3')}</p>
                                    <a href="/">{t('navbar-menu-consultation')}</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='second-slide'>
                            <div className="slide-items">
                                <div className='slide-wrapper'>
                                    <img src={titleDecoration} alt="logo" />
                                </div>
                                <div className='slide-name'>
                                    <span>{t('slide-title-desc1')}</span>
                                    <p>{t('slide2-title-name')}<span>{t('slide2-title-name2')}</span>{t('slide2-title-name3')}</p>
                                    <a href="/">{t('navbar-menu-consultation')}</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='third-slide'>
                            <div className="slide-items">
                                <div className='slide-wrapper'>
                                    <img src={titleDecoration} alt="logo" />
                                </div>
                                <div className='slide-name'>
                                    <span>{t('slide-title-desc1')}</span>
                                    <p>{t('slide3-title-name')}<span>{t('slide3-title-name2')}</span>{t('slide3-title-name3')}</p>
                                    <a href="/">{t('navbar-menu-consultation')}</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className='description-blocks'>
                    <div className={`description ${activeBlock === 0 ? 'active' : ''}`}>
                        <span className='description-numb'>01</span>
                        <span className='description-text'>{t('slide-desc1')}</span>
                    </div>
                    <div className={`description ${activeBlock === 1 ? 'active' : ''}`}>
                        <span className='description-numb'>02</span>
                        <span className='description-text'>{t('slide-desc2')}</span>
                    </div>
                    <div className={`description ${activeBlock === 2 ? 'active' : ''}`}>
                        <span className='description-numb'>03</span>
                        <span className='description-text'>{t('slide-desc3')}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
