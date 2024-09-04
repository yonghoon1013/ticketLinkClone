import React from 'react'
import MainSlider from '../components/MainSlider'
import homeStyle from '../styles/home.module.scss'

// 첫번째 배너 이미지
import firstBannerImg1 from '../asset/imgs/common/티켓링크_레이어배너1.jpg'
import firstBannerImg2 from '../asset/imgs/common/티켓링크_레이어배너2.png'

// 미드 배너 이미지
import midBannerImg from '../asset/imgs/common/MiddleLineBanner_kakaotalk.png'


import imgData from '../asset/json/posterData.json'
import PosterComponent from '../components/PosterComponent'
import { Link } from 'react-router-dom'
import TodayPickSlider from '../components/TodayPickSlider'


function Home() {
    console.log(imgData.categoryRanking);

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

            {/* 두번 째 배너 섹션 */}
            <section className={homeStyle.midBannerSec}>
                <div>
                    <img src={midBannerImg} alt='카카오톡 배너'></img>
                </div>
            </section>

            {/* 랭킹 섹션 */}
            <section className={homeStyle.rankSec}>
                <div className={homeStyle.rankBox}>
                    <div className={homeStyle.secTop}>
                        <ul className={homeStyle.rankTopList}>
                            <li><button type='button'>장르별랭킹</button></li>
                            <li><button type='button'>지역별랭킹</button></li>
                        </ul>

                        <button>전체보기</button>
                    </div>

                    <div className={homeStyle.rankCategoryBox}>
                        <ul className={homeStyle.rankCategoryList}>
                            {
                                imgData.categoryRanking.category.map((item, index) => (
                                    <li><button type='button'>{item.name}</button></li>
                                ))
                            }
                        </ul>

                        <ul className={homeStyle.rankDateList}>
                            <li><button>일간</button></li>
                            <li><button>주간</button></li>
                            <li><button>월간</button></li>
                            <li><button>연간</button></li>
                        </ul>
                    </div>

                    <div className={homeStyle.posterBox}>
                        <ul className={homeStyle.rankPosterList}>
                            {
                                imgData.categoryRanking.musical.daily.map((item, index) => (
                                    <li key={index}>
                                        <PosterComponent props={item} />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>

            {/* 오늘의 추천 섹션 */}
            <section className={homeStyle.todayPickSec}>
                            <TodayPickSlider />
            </section>
        </main>
    )
}

export default Home