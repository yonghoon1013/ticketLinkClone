import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import todayPickSlideStyle from '../styles/todayPickSlider.module.scss'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';

function TodayPickSlider() {
    return (
        <div className={todayPickSlideStyle.todayPickBox}>
            <div className={todayPickSlideStyle.slideWrap}>
                <h2>오늘의 추천</h2>
                <div className={todayPickSlideStyle.slideBox}>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className={todayPickSlideStyle.todayPickSwiper}
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default TodayPickSlider