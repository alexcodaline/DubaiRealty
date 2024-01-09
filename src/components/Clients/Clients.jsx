import React from 'react'
import './Clients.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay'
import 'swiper/css/effect-coverflow';
import client1 from "./../../img/clients/client1.webp"
import client2 from "./../../img/clients/client2.webp"

export default function Clients() {
    return (
        <section className='clients'>
            <div className='container'>
                <div className='container-swiper-client'>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        spaceBetween={20}
                        style={{
                            '--swiper-navigation-color': '#fcd54c',
                            '--swiper-pagination-color': '#fcd54c',
                        }}
                        speed={750}
                        slidesPerView={4}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{ delay: 4000 }}
                        navigation={false}
                        modules={[Pagination, Autoplay, EffectCoverflow]}
                        loop={true}
                        centeredSlides={true}
                        className='swiper-clients'
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 5,
                            },
                            767: {
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
                                            <span className='client-name'>Paul</span>
                                            <span className='client-about'>Owner in <span>Paul.com</span></span>
                                            <p className='client-desc'>Projects for many large domestic and foreign corporations, enterprises in many fields such as finance, banking, F&B, education, communication.</p>
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
                                            <span className='client-name'>Robert</span>
                                            <span className='client-about'>Founder in <span>Apple inc.</span></span>
                                            <p className='client-desc'>Founded in 2007, Sparch is specializing in providing innovative services such as website design, brand identity and marketing</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </React.Fragment>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section >
    )
}
