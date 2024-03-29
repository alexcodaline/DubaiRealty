import React, { useState } from 'react'
import './Projects.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Grid } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/scss';
import 'swiper/scss/grid';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay'
import 'swiper/scss/navigation';

export default function Projects() {
    const [isHoveredSlide1, setIsHoveredSlide1] = useState(false);
    const [isHoveredSlide2, setIsHoveredSlide2] = useState(false);
    const [isHoveredSlide3, setIsHoveredSlide3] = useState(false);
    const [isHoveredSlide4, setIsHoveredSlide4] = useState(false);

    const toggleHover1 = () => setIsHoveredSlide1(!isHoveredSlide1);
    const toggleHover2 = () => setIsHoveredSlide2(!isHoveredSlide2);
    const toggleHover3 = () => setIsHoveredSlide3(!isHoveredSlide3);
    const toggleHover4 = () => setIsHoveredSlide4(!isHoveredSlide4);
    const { t } = useTranslation();

    return (
        <section className='projects'>
            <div className='container'>
                <div className='projects-links'>
                    <div className='projects-latest'>
                        <span>{t('projects-title')}</span>
                    </div>
                    <div className='projects-links-items'>
                        <div className='projects-links-item'>
                            <a href="/">{t('projects-last')}</a>
                        </div>
                        <div className='projects-links-item'>
                            <a href="/">{t('projects-build')}</a>
                        </div>
                        <div className='projects-links-item'>
                            <a href="/">{t('projects-interior')}</a>
                        </div>
                        <div className='projects-links-item'>
                            <a href="/">{t('projects-all')}</a>
                        </div>
                    </div>
                </div>
                <Swiper
                    spaceBetween={30}
                    style={{
                        '--swiper-navigation-color': '#fcd54c',
                        '--swiper-pagination-color': '#fcd54c',
                        '--swiper-pagination-bottom': '5px',
                    }}
                    speed={750}
                    slidesPerView={4}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{ delay: 4000 }}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay, Grid]}
                    loop={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                            grid: {
                                rows: 2,
                            },
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                    }
                    }
                    className='project-swiper'
                >
                    {[...Array(2)].map((_, index) => (
                        <React.Fragment key={`slide-${index}`}>
                            {/* slide1 */}
                            <SwiperSlide key={`slide-${index}-1`}
                                onMouseEnter={() => setIsHoveredSlide1(true)}
                                onMouseLeave={() => setIsHoveredSlide1(false)}
                                onClick={toggleHover1}
                            >
                                <div className={`vilas ${isHoveredSlide1 ? 'hovered' : ''}`}>
                                    {!isHoveredSlide1 && (
                                        <div className='slide-name'>{t('project-vilas')}</div>
                                    )}
                                    {isHoveredSlide1 ? (
                                        <div className="hovered">
                                            <span className='desc-name'>{t('project-vilas')}</span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.</p>
                                            <a href="/">{t('project-link')}</a>
                                        </div>
                                    ) : null}
                                </div>
                            </SwiperSlide>
                            {/* slide2 */}
                            <SwiperSlide key={`slide-${index}-2`}
                                onMouseEnter={() => setIsHoveredSlide2(true)}
                                onMouseLeave={() => setIsHoveredSlide2(false)}
                                onClick={toggleHover2}
                            >
                                <div className={`houses ${isHoveredSlide2 ? 'hovered' : ''}`}>
                                    {!isHoveredSlide2 && (
                                        <div className='slide-name'>{t('project-houses')}</div>
                                    )}
                                    {isHoveredSlide2 ? (
                                        <div className="hovered">
                                            <span className='desc-name'>{t('project-houses')}</span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.</p>
                                            <a href="/">{t('project-link')}</a>
                                        </div>
                                    ) : null}
                                </div>
                            </SwiperSlide>
                            {/* slide3 */}
                            <SwiperSlide key={`slide-${index}-3`}
                                onMouseEnter={() => setIsHoveredSlide3(true)}
                                onMouseLeave={() => setIsHoveredSlide3(false)}
                                onClick={toggleHover3}
                            >
                                <div className={`townhouses ${isHoveredSlide3 ? 'hovered' : ''}`}>
                                    {!isHoveredSlide3 && (
                                        <div className='slide-name'>{t('project-town')}</div>
                                    )}
                                    {isHoveredSlide3 ? (
                                        <div className="hovered">
                                            <span className='desc-name'>{t('project-town')}</span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.</p>
                                            <a href="/">{t('project-link')}</a>
                                        </div>
                                    ) : null}
                                </div>
                            </SwiperSlide>
                            {/* slide4 */}
                            <SwiperSlide key={`slide-${index}-4`}
                                onMouseEnter={() => setIsHoveredSlide4(true)}
                                onMouseLeave={() => setIsHoveredSlide4(false)}
                                onClick={toggleHover4}
                            >
                                <div className={`comers ${isHoveredSlide4 ? 'hovered' : ''}`}>
                                    {!isHoveredSlide4 && (
                                        <div className='slide-name'>{t('project-comers')}</div>
                                    )}
                                    {isHoveredSlide4 ? (
                                        <div className="hovered">
                                            <span className='desc-name'>{t('project-comers')}</span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.</p>
                                            <a href="/">{t('project-link')}</a>
                                        </div>
                                    ) : null}
                                </div>
                            </SwiperSlide>
                        </React.Fragment>
                    ))}
                </Swiper >
            </div>
        </section >
    )
}