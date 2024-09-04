import React, { useRef } from 'react';
import mainSliderStyle from '../styles/mainSlider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import mainSlideData from '../asset/json/mainSlideData.json'

function MainSlider() {
    console.log(mainSlideData[0].mainImg);
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div className={mainSliderStyle.slideWrap}>
            <div className={mainSliderStyle.slideBox}>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className={mainSliderStyle.mainSwiper}
                >
                    {
                        mainSlideData.map((item, index) => (
                            <SwiperSlide key={index} className={mainSliderStyle.swiperSlide}>
                                <img src={require(`../${item.mainSrc}`)} alt={item.alt} />
                            </SwiperSlide>
                        ))
                    }
                    <div className={mainSliderStyle.autoplayProgress} slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>

            <div className={mainSliderStyle.thumbnailBox}>
                <ul className={mainSliderStyle.thumbnailList}>
                    {
                        mainSlideData.map((item, index) => (
                            <li key={index}>
                                <img src={require(`../${item.thumbSrc}`)} alt="d" />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default MainSlider;
