import React, { useState, useEffect } from 'react';
import searchIcon from "../../../img/icons/search.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Grid } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import './Blog.scss';

export default function Blog() {
  const [searchItem, setSearchItem] = useState('');
  const [filteredSlides, setFilteredSlides] = useState([]);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  const slides = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    title: `Commercial property in Abu Dhabi`,
    description: `In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed ... `,
    image: require(`../../../img/blog/item${index + 1}.webp`),
    link: '/'
  }));

  useEffect(() => {

    const filtered = slides.filter(slide => slide.title.toLowerCase().includes(searchItem.toLowerCase()));
    setFilteredSlides(filtered);
  }, [searchItem, slides]);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <section className='blog'>
      <div className='container'>
        <div className='search-container'>
          <h3>Blog</h3>
          <div className='search'>
            <form className='search-form' onSubmit={handleSearch}>
              <input
                type="text"
                placeholder='Search...'
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
              />
              <button type="submit"><img src={searchIcon} alt="Search" style={{ width: '40px', height: '40px' }} /></button>
            </form>
          </div>
        </div>
        <div className='blog-items-container'>
          <div className='slider-blog-items'>
            <Swiper
              style={{
                '--swiper-navigation-color': '#fcd54c',
                '--swiper-pagination-color': '#fcd54c',
                '--swiper-pagination-progressbar-size': '40px',
                '--swiper-pagination-bottom': '0',
                '--swiper-pagination-bullet-size': '20px',
                '--swiper-pagination-bullet-width': '20px',
                '--swiper-pagination-bullet-inactive-color': '#fff',
              }}
              slidesPerView={3}
              pagination={pagination}
              modules={[Pagination, Grid]}
              spaceBetween={30}
              grid={{
                rows: 2,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 5,
                  grid: {
                    rows: 2,
                },
                },
                769: {
                  slidesPerView: 3,
                }
              }}
              className="SwiperBlog"
            >
              {filteredSlides.map(slide => (
                <SwiperSlide key={slide.id}>
                  <div className='blog-item'>
                    <img src={slide.image} alt={slide.title} />
                    <h4>{slide.title}</h4>
                    <span>{slide.description}</span>
                    <a href={slide.link}>Learn more</a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section >
  );
}