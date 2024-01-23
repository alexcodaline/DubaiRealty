import React, { useState } from 'react'
import "./Title.scss"
import titleDecoration from "../../../img/icons/title-decoration.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Autoplay } from 'swiper/modules';
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
                    modules={[EffectFade, Navigation,Autoplay]}
                    loop={true}
                >
                    <SwiperSlide>
                        <div className='first-slide'>
                            <div className="slide-items">
                                <div className='slide-wrapper'>
                                    <img src={titleDecoration} alt="logo" />
                                </div>
                                <div className='slide-name'>
                                    <span>LOREM IPSUM</span>
                                    <p>Welcome Home <span>To</span> Luxury</p>
                                    <a href="/">Book a consultation</a>
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
                                    <span>LOREM IPSUM</span>
                                    <p>Discover <span>Nighttime</span> Dubai</p>
                                    <a href="/">Book a consultation</a>
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
                                    <span>LOREM IPSUM</span>
                                    <p>Dubai at <span>Twilight</span></p>
                                    <a href="/">Book a consultation</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className='description-blocks'>
                    <div className={`description ${activeBlock === 0 ? 'active' : ''}`}>
                        <span className='description-numb'>01</span>
                        <span className='description-text'>Home Luxury</span>
                    </div>
                    <div className={`description ${activeBlock === 1 ? 'active' : ''}`}>
                        <span className='description-numb'>02</span>
                        <span className='description-text'>Nighttime Dubai</span>
                    </div>
                    <div className={`description ${activeBlock === 2 ? 'active' : ''}`}>
                        <span className='description-numb'>03</span>
                        <span className='description-text'>Dubai at Twilight</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
