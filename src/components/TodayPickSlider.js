import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import todayPickSlideStyle from '../styles/todayPickSlider.module.scss'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';
    import { Link } from 'react-router-dom';

import { EffectFade } from 'swiper/modules';

import slideData from '../asset/json/slideData.json'

function TodayPickSlider() {

    const [activeIndex, setActiveIndex] = useState(0);

    const swiperRef = useRef(null);
    const todaySlideLiList = useRef([]);

    // li마우스 호버시 호버한 li의 인덱스 값에 맞는 슬라이드로 이동
    const slideMouseEnter = (index) => {
        if (swiperRef.current) {
            swiperRef.current.el.swiper.slideTo(index);
        }
    };


    return (
        <div className={todayPickSlideStyle.slideWrap}>
            <div className={todayPickSlideStyle.secHeader}>
                <h2>오늘의 추천</h2>
            </div>
            <div className={todayPickSlideStyle.slideBox}>
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, EffectFade]}
                    className={todayPickSlideStyle.todayPickSwiper}
                    onSwiper={(swiper) => { swiperRef.current = swiper; }}
                    // 현재 슬라이드 액티브의 index값을 state에 담음.
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                >
                    {
                        slideData.todayPickSlide.map((item, index) => (
                            <SwiperSlide key={index} className={todayPickSlideStyle.swiperSlide} style={{ backgroundColor: item.bgColor }}>
                                <div className={todayPickSlideStyle.swiperSlideCon}>
                                    <Link to={'/'}>
                                        <div className={todayPickSlideStyle.left}>
                                            <span className={todayPickSlideStyle.title}>{item.title}</span>
                                            <span className={todayPickSlideStyle.schedule}>{item.schedule}</span>
                                        </div>
                                        <div className={todayPickSlideStyle.right}>
                                            <img src={require(`../${item.mainSrc}`)} alt={item.alt} />
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                    <ul className={todayPickSlideStyle.todayPickSlideList}>
                        {
                            slideData.todayPickSlide.map((item, index) => (
                                // 현재 슬라이드 액티브의 index값과 일치하는 li한테 클래스 추가
                                <li key={index} className={`${activeIndex === index ? todayPickSlideStyle.active : ""}`} ref={(el) => (todaySlideLiList.current[index] = el)} onMouseEnter={() => { slideMouseEnter(index) }}>
                                    <Link to={'/'}>{item.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </Swiper>
            </div>
        </div>
    )
}

export default TodayPickSlider