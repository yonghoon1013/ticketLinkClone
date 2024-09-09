import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Link } from 'react-router-dom';

import { EffectFade, Navigation } from 'swiper/modules';

import vedioSliderStyle from '../styles/vedioSlider.module.scss'

import vedioData from '../asset/json/vedioData.json'

function VedioSlider() {


    return (
        <div className={vedioSliderStyle.vedioBox}>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                // 스와이퍼 페이드일때 요소가 겹쳐서 보이면 써주면됨
                fadeEffect={{
                    crossFade: true,
                }}
                // 클래스가 customNext인걸 nextEl에적용 후 클래스가 customNext인 버튼 생성하면 커스텀가능
                navigation={{
                    nextEl: `.${vedioSliderStyle.customNext}`,
                    prevEl: `.${vedioSliderStyle.customPrev}`,
                }}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Navigation]}
                className={vedioSliderStyle.vedioSwiper}
            >
                {
                    vedioData.map((item, index) => (
                        <SwiperSlide key={index} className={vedioSliderStyle.swiperSlide}>
                            <div className={vedioSliderStyle.left}>
                                <span className={vedioSliderStyle.title}>{item.title}</span>
                                <span className={vedioSliderStyle.link}>바로가기</span>
                            </div>
                            <div className={vedioSliderStyle.right}>
                                <iframe src={item.vedioSrc}></iframe>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className={vedioSliderStyle.navigationButtons}>
                <button className={vedioSliderStyle.customPrev}><FontAwesomeIcon icon={faAngleLeft} /></button>
                <button className={vedioSliderStyle.customNext}><FontAwesomeIcon icon={faAngleRight} /></button>
            </div>
        </div>
    )
}

export default VedioSlider