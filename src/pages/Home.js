import React from 'react'
import MainSlider from '../components/MainSlider'
import homeStyle from '../styles/home.module.scss'

import firstBannerImg1 from '../asset/imgs/common/티켓링크_레이어배너1.jpg'
import firstBannerImg2 from '../asset/imgs/common/티켓링크_레이어배너2.png'

import imgData from '../asset/json/posterData.json'
import PosterComponent from '../components/PosterComponent'
import { Link } from 'react-router-dom'


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
                <div className={homeStyle.ticketOpneBox}>
                    <div className={homeStyle.secTop}>
                        <h2>티켓오픈</h2>
                        <Link to={'/'}>전체보기</Link>
                    </div>
                    <div className={homeStyle.posterBox}>
                        <ul className={homeStyle.ticketOpnePostList}>
                        {
                            imgData.ticketOpne.map((item, index) => (
                                <li key={index}>
                                    <PosterComponent props={item} />
                                </li>
                            ))
                        }
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home