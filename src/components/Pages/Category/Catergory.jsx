import React, { useState } from 'react';
import './Category.scss'
import categoryWrapper from '../../../img/category/category-wrapper.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Grid } from 'swiper/modules'
import 'swiper/scss';
import 'swiper/scss/pagination';
import ContactUs from '../../Homepage/ContactUs/ContactUs';

const offerData = [
  { id: 1, image: require('../../../img/category/offer1.webp'), type: 'Townhous', name: 'Arabian Ranches', description: 'The launch of this community enabled expats to own a luxurious property in Dubai. ' },
  { id: 2, image: require('../../../img/category/offer2.webp'), type: 'Villa', name: 'Dubai Hills Estate', description: 'Al Barsha South, Downtown Dubai are two popular areas that lie close to this neighbourhood.' },
  { id: 3, image: require('../../../img/category/offer3.webp'), type: 'Commercial', name: 'Shell and Core', description: 'The launch of this community enabled expats to own a luxurious property in Dubai. ' },
  { id: 4, image: require('../../../img/category/offer4.webp'), type: 'Apartments', name: 'Arabian Ranches', description: 'The launch of this community enabled expats to own a luxurious property in Dubai. ' },
  { id: 5, image: require('../../../img/category/offer5.webp'), type: 'Townhous', name: 'Arabian Ranches', description: 'The launch of this community enabled expats to own a luxurious property in Dubai. ' },
  { id: 6, image: require('../../../img/category/offer6.webp'), type: 'Commercial', name: 'Shell and Core', description: 'The launch of this community enabled expats to own a luxurious property in Dubai. ' },
  { id: 7, image: require('../../../img/category/offer7.webp'), type: 'Commercial', name: 'Shell and Core', description: 'The launch of this community enabled expats to own a luxurious property in Dubai. ' },
  { id: 8, image: require('../../../img/category/offer8.webp'), type: 'Apartments', name: 'Luxury Living', description: 'The launch of this community enabled expats to own a luxurious property in Dubai. ' },
  { id: 9, image: require('../../../img/category/offer9.webp'), type: 'Commercial', name: 'Shell and Core', description: 'The launch of this community enabled expats to own a luxurious property in Dubai. ' },
  { id: 10, image: require('../../../img/category/offer10.webp'), type: 'Commercial', name: 'Shell and Core', description: 'The launch of this community enabled expats to own a luxurious property in Dubai. ' },
  { id: 11, image: require('../../../img/category/offer11.webp'), type: 'Apartments', name: 'Luxury Living', description: 'The launch of this community enabled expats to own a luxurious property in Dubai. ' },
  { id: 12, image: require('../../../img/category/offer12.webp'), type: 'Townhous', name: 'Arabian Ranches', description: 'The launch of this community enabled expats to own a luxurious property in Dubai. ' },
];


export default function Category() {
  const [isHoveredCategory1, setIsHoveredCategory1] = useState(false);
  const [isHoveredCategory2, setIsHoveredCategory2] = useState(false);
  const [isHoveredCategory3, setIsHoveredCategory3] = useState(false);
  const [isHoveredCategory4, setIsHoveredCategory4] = useState(false);

  const [hoveredOfferSlide, setHoveredOfferSlide] = useState(null);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <section className='category'>
      <div className="container">
        <div className='category-container'>
          <div className='category-wrapper'>
            <img src={categoryWrapper} alt="Category wrapper" />
            <span className='category-title'>Apartments <span>in Dubai</span></span>
          </div>
          <div className="category-all">
            <h3>All Apartments <br />Category</h3>
            <div className='category-all-swiper'>
              <Swiper
                grabCursor={true}
                slidesPerView={4}
                centeredSlides={false}
                spaceBetween={30}
                slidesPerGroup={1}
                style={{
                  '--swiper-navigation-color': '#fcd54c',
                  '--swiper-pagination-color': '#fcd54c',
                  '--swiper-pagination-bottom': '8px',
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                loop={true}
                className='swiper-category'
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 5,

                  },
                  769: {
                    slidesPerView: 2,
                  },
                  1080: {
                    slidesPerView: 4,
                  }
                }}
              >
                {[...Array(2)].map((_, index) => (
                  <React.Fragment key={`slide-${index}`}>
                    <SwiperSlide key={`slide-${index}-1`}>
                      <div
                        className={`category-slide1 ${isHoveredCategory1 ? 'hover-slide-category' : ''}`}
                        onMouseEnter={() => {
                          setIsHoveredCategory1(true);
                        }}
                        onMouseLeave={() => setIsHoveredCategory1(false)}
                      >
                        {!isHoveredCategory1 && <span>Townhouse</span>}
                        {isHoveredCategory1 && (
                          <div className='hover-slide-category'>
                            <div className='hover-slide-category-desc'>
                              <h4>Apartments</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.</p>
                              <a href="/">Learn more</a>
                            </div>
                          </div>
                        )}
                      </div>
                    </SwiperSlide>


                    <SwiperSlide key={`slide-${index}-2`}>
                      <div
                        className={`category-slide2 ${isHoveredCategory2 ? 'hover-slide-category' : ''}`}
                        onMouseEnter={() => {
                          setIsHoveredCategory2(true);
                        }}
                        onMouseLeave={() => setIsHoveredCategory2(false)}
                      >
                        {!isHoveredCategory2 && <span>Vila</span>}
                        {isHoveredCategory2 && (
                          <div className='hover-slide-category'>
                            <div className='hover-slide-category-desc'>
                              <h4>Apartments</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.</p>
                              <a href="/">Learn more</a>
                            </div>
                          </div>
                        )}
                      </div>
                    </SwiperSlide>


                    <SwiperSlide key={`slide-${index}-3`}>
                      <div
                        className={`category-slide3 ${isHoveredCategory3 ? 'hover-slide-category' : ''}`}
                        onMouseEnter={() => {
                          setIsHoveredCategory3(true);
                        }}
                        onMouseLeave={() => setIsHoveredCategory3(false)}
                      >
                        {!isHoveredCategory3 && <span>Commercial</span>}
                        {isHoveredCategory3 && (
                          <div className='hover-slide-category'>
                            <div className='hover-slide-category-desc'>
                              <h4>Apartments</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.</p>
                              <a href="/">Learn more</a>
                            </div>
                          </div>
                        )}
                      </div>
                    </SwiperSlide>
                    <SwiperSlide key={`slide-${index}-4`}>
                      <div
                        className={`category-slide4 ${isHoveredCategory4 ? 'hover-slide-category' : ''}`}
                        onMouseEnter={() => {
                          setIsHoveredCategory4(true);
                        }}
                        onMouseLeave={() => setIsHoveredCategory4(false)}
                      >
                        {!isHoveredCategory4 && <span>House</span>}
                        {isHoveredCategory4 && (
                          <div className='hover-slide-category'>
                            <div className='hover-slide-category-desc'>
                              <h4>Apartments</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.</p>
                              <a href="/">Learn more</a>
                            </div>
                          </div>
                        )}
                      </div>
                    </SwiperSlide>
                  </React.Fragment>
                ))}
              </Swiper>
            </div>
            <h3>Best Offers</h3>
          </div>
          <div className='category-offers'>
            <Swiper
              style={{
                '--swiper-navigation-color': '#fcd54c',
                '--swiper-pagination-color': '#fcd54c',
                '--swiper-pagination-bottom': '0px',
                '--swiper-pagination-progressbar-size': '40px',
                '--swiper-pagination-bullet-size': '20px',
                '--swiper-pagination-bullet-width': '20px',
                '--swiper-pagination-bullet-inactive-color': '#fff',
              }}
              grabCursor={true}
              slidesPerView={4}
              spaceBetween={20}
              pagination={pagination}
              modules={[Pagination, Grid]}
              grid={{
                rows: 2,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 5,
                  grid: {
                    fill: 'column',
                  },
                },
                769: {
                  slidesPerView: 2,
                },
                1080: {
                  slidesPerView: 4,
                }
              }}
              className="offer-swiper"
            >
              {offerData.map((slideOffer) => (
                <SwiperSlide key={slideOffer.id}>

                  <div className='offer-slide-container'>
                    <img src={slideOffer.image} alt={slideOffer.id} />
                    <div className={`offer-slide ${hoveredOfferSlide === slideOffer.id ? 'offer-hovered' : ''}`}
                      onMouseEnter={() => setHoveredOfferSlide(slideOffer.id)}
                      onMouseLeave={() => setHoveredOfferSlide(null)}>
                      <p>{slideOffer.type}</p>
                      <span className='offer-name'>{slideOffer.name}</span>
                      <span className='offer-desc'>{slideOffer.description}</span>
                      <a href="/">Learn more</a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='category-apartments'>
            <div className="apartments-container">
              <span>Apartments</span>
              <p>To and from, fascinated her: every pebble, ant, stick, leaf, blade of grass, and crack in the sidewalk was something to be picked up, looked at, tasted, smelled, and shaken. Everything was interesting to her. She knew nothing. I knew everything…been there, done that. She was in the moment, I was in the past. She was mindful. I was mindless.</p>
              <span>Everything along the way</span>
              <p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all: making mistakes.</p>
            </div>
          </div>
          <ContactUs />
        </div>
      </div>
    </section >
  );
}