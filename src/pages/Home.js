import React from 'react'
import MainSlider from '../components/MainSlider'
import homeStyle from '../styles/home.module.scss'

import firstBannerImg1 from '../asset/imgs/common/티켓링크_레이어배너1.jpg'
import firstBannerImg2 from '../asset/imgs/common/티켓링크_레이어배너2.png'

import imgData from '../asset/json/posterData.json'
import PosterComponent from '../components/PosterComponent'


function Home() {
    
    return (
        <main>
            {/* 메인 슬라이드 섹션 */}
            <section className={homeStyle.mainSlideSec}>
                <MainSlider />
            </section>

            {/* 첫번 쨰 배너 섹션 */}
            <section className={homeStyle.firstBannerSec}>
                <ul className={homeStyle.firstBannerList}>
                    <li><img src={firstBannerImg1} alt='스탠리 이미지 배너'></img></li>
                    <li><img src={firstBannerImg2} alt='일본 소도시 마쯔야마 여행 배너'></img></li>
                </ul>
            </section>

            {/* 티켓 오픈 섹션 */}
            <section className={homeStyle.ticketOpneSec}>
                {
                    imgData.ticketOpne.map((item,index)=>(
                        <PosterComponent key={index} props={item} />
                    ))
                }
            </section>
        </main>
    )
}

export default Home