import React, { useEffect, useRef, useState } from 'react';
import mainSliderStyle from '../styles/mainSlider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePause, faPause } from '@fortawesome/free-solid-svg-icons';


import slideData from '../asset/json/slideData.json'

function MainSlider() {

    const [pauseVal, setPauseVal] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const swiperRef = useRef(null);
    const thumbnaiRef = useRef([]);

    const [effect, setEffect] = useState(window.innerWidth < 1024 ? 'slide' : 'fade');
    
    

    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
    };

    // li마우스 호버시 호버한 li의 인덱스 값에 맞는 슬라이드로 이동
    const slideMouseEnter = (index) => {
        if (swiperRef.current) {
            swiperRef.current.el.swiper.slideTo(index);
        }
    };



    useEffect(()=>{

        const swiperMobile = () =>{
            setEffect(window.innerWidth < 1024 ? 'slide' : 'fade');
        }

        window.addEventListener('resize', swiperMobile);

        return () => {
            window.removeEventListener('resize', swiperMobile);
        };

    },[])

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.update(); // Swiper 업데이트
        }
        
    }, [effect]);



    useEffect(() => {
        if (swiperRef.current) {
            if (pauseVal) {
                swiperRef.current.autoplay.stop();
            } else {
                swiperRef.current.autoplay.start();
            }
        }
    }, [pauseVal]);

    return (
        <div className={mainSliderStyle.slideWrap}>
            <div className={mainSliderStyle.slideBox}>
                <Swiper
        slidesPerView="auto"
        spaceBetween={30}   
        centeredSlides={false} 
        freeMode={true}  
                    effect={effect}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, EffectFade]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className={mainSliderStyle.mainSwiper}
                    onSwiper={(swiper) => { swiperRef.current = swiper; }}
                    // 현재 슬라이드 액티브의 index값을 state에 담음.
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                >
                    
                    {
                        slideData.mainSlide.map((item, index) => (
                            <SwiperSlide key={index} className={mainSliderStyle.swiperSlide}>
                                <img src={require(`../${item.mainSrc}`)} alt={item.alt} />
                            </SwiperSlide>
                        ))
                    }
                    <div className={`${mainSliderStyle.autoplayProgress} ${pauseVal ? mainSliderStyle.stop : mainSliderStyle.paly} `} slot="container-end" onClick={() => { setPauseVal(!pauseVal) }}>
                        <svg viewBox="0 0 40 40" ref={progressCircle}>
                            <circle cx="20" cy="20" r="19"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>

            <div className={mainSliderStyle.thumbnailBox}>
                <ul className={mainSliderStyle.thumbnailList}>
                    {
                        slideData.mainSlide.map((item, index) => (
                            <li key={index} className={`${activeIndex === index ? mainSliderStyle.active : ""}`} ref={(el) => (thumbnaiRef[index] = el)} onMouseEnter={() => { slideMouseEnter(index) }}>
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
