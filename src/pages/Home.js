import React, { useEffect, useRef, useState } from 'react'
import MainSlider from '../components/MainSlider'
import homeStyle from '../styles/home.module.scss'

// 첫번째 배너 이미지
import firstBannerImg1 from '../asset/imgs/common/티켓링크_레이어배너1.jpg'
import firstBannerImg2 from '../asset/imgs/common/티켓링크_레이어배너2.png'

// 미드 배너 이미지
import midBannerImg from '../asset/imgs/common/MiddleLineBanner_kakaotalk.png'

// 페이코로고 이미지
import paycoLogo from '../asset/imgs/common/payco_logo.svg'

// 기획전 배너 이미지
import planImg from '../asset/imgs/common/기획전_배너.jpeg'

//왼쪽 배너 이미지
import leftBanner1 from '../asset/imgs/common/WingBanner_e-스포츠.jpg'
import leftBanner2 from '../asset/imgs/common/WingBanner_대구수성아트피아.jpg'
import leftBanner3 from '../asset/imgs/common/WingBanner_링크아트센터.jpg'

// 오른쪽 배너 이미지
import rightBanner1 from '../asset/imgs/common/WingBanner_샤롯데.jpg'
import rightBanner2 from '../asset/imgs/common/WingBanner_이대삼성홀.jpg'

import imgData from '../asset/json/posterData.json'
import PosterComponent from '../components/PosterComponent'
import { Link } from 'react-router-dom'
import TodayPickSlider from '../components/TodayPickSlider'
import PaycoPosterComponent from '../components/PaycoPosterComponent'
import VedioSlider from '../components/VedioSlider'


function Home() {

    const leftBannerRef = useRef(null);
    const rightBannerRef = useRef(null);

    const [fixedVal, setFixedVal] = useState(null)

    useEffect(() => {
        const sideBannerScroll = () => {
            if (rightBannerRef.current) {
                const windowHeight = window.scrollY;

                const isStickyNow = windowHeight >= 800;
                setFixedVal(isStickyNow);
            }
        };

        window.addEventListener('scroll', sideBannerScroll);

        sideBannerScroll();

        return () => {
            window.removeEventListener('scroll', sideBannerScroll);
        };
    }, []);


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
                                        <PosterComponent props={item} size="mini" />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>

            {/* 두번 째 배너 섹션 */}
            <section className={homeStyle.midBannerSec}>
                <div className={homeStyle.imgBox}>
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
                                    <li key={index}><button type='button'>{item.name}</button></li>
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
                                        <PosterComponent props={item} size="mini" />
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

            {/* payco vip 섹션 */}
            <section className={homeStyle.paycoVipSec}>
                <div className={homeStyle.paycoBox}>
                    <div className={homeStyle.secTop}>
                        <h2><img src={paycoLogo} alt='페이코 로고'></img></h2>
                        <Link to={'/'}>전체보기</Link>
                    </div>
                    <div className={homeStyle.posterBox}>
                        <ul className={homeStyle.paycoList}>
                            {
                                imgData.payco.map((item, index) => (
                                    <li key={index}>
                                        <PaycoPosterComponent props={item} />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>

            {/* 기획전 오픈 배너 섹션 */}
            <section className={homeStyle.planSec}>
                <div className={homeStyle.planBox}>
                    <div className={homeStyle.secTop}>
                        <h2>기획전 OPNE!</h2>
                    </div>
                    <div className={homeStyle.planImgBox}>
                        <Link to={'/'}>
                            <img src={planImg} alt='기획전 배너'></img>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 티켓 스팟 비디오 섹션 */}
            <section className={homeStyle.ticketVedioSec}>
                <div className={homeStyle.ticektVedioBox}>
                    <div className={homeStyle.secTop}>
                        <h2>TICKET SPOT</h2>
                    </div>
                    <VedioSlider />
                </div>
            </section>

            {/* 이주의 공연 섹션 */}
            <section className={homeStyle.weeklyPerformanceSec}>
                <div className={homeStyle.weeklyPerformanceBox}>
                    <div className={homeStyle.secTop}>
                        <h2>이주의 공연·전시</h2>
                    </div>
                    <div className={homeStyle.posterBox}>
                        <div className={homeStyle.mainPosterBox}>
                            {
                                imgData.weeklyPerformance.mainPoster.map((item, index) => (
                                    <div className={homeStyle.mainPoster} key={index}><PosterComponent props={item} /></div>
                                ))
                            }
                        </div>
                        <div className={homeStyle.subPosterBox}>
                            <ul className={homeStyle.subPosterList}>
                                {
                                    imgData.weeklyPerformance.subPoster.slice(0, 3).map((item, index) => (
                                        <li key={index}><PosterComponent props={item} size='large' /></li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className={homeStyle.subPosterBox}>
                            <ul className={homeStyle.subPosterList}>
                                {
                                    imgData.weeklyPerformance.subPoster.slice(3, 6).map((item, index) => (
                                        <li key={index}><PosterComponent props={item} size='large' /></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 베스트 공연 섹션 */}
            <section className={homeStyle.bestPerformanceSec}>
                <div className={homeStyle.secTop}>
                    <h2>베스트 공연·전시</h2>
                </div>
                <div className={homeStyle.posterBox}>
                    <ul className={homeStyle.posterList}>
                        {
                            imgData.bestPerformance.map((item, index) => (
                                <li key={index}><PosterComponent props={item} size="medium" /></li>
                            ))
                        }
                    </ul>
                </div>
            </section>

            {/* 공연장 섹션 */}
            {/* <section className={homeStyle.concertSec}>
                                    <div className={homeStyle.secTop}>
                                        <h2>공연장</h2>
                                        <ul>
                                            <li><button type='button'>이화여대 ECC삼성홀</button></li>
                                            <li><button type='button'>롯데콘서트홀</button></li>
                                            <li><button type='button'>세종문화회관</button></li>
                                            <li><button type='button'>LG아트센터 서울</button></li>
                                            <li><button type='button'>금호아트홀연세</button></li>
                                            <li><button type='button'>부천아트센터</button></li>
                                            <li><button type='button'>대구수성아파트</button></li>
                                            <li><button type='button'>안동문화예술의전당</button></li>
                                        </ul>
                                    </div>

                        </section> */}

            <div ref={leftBannerRef} className={`${homeStyle.leftBanner} ${homeStyle.sideBanner} ${fixedVal ? homeStyle.fixed : ""}`}>
                <ul>
                    <li><Link to={'/'}><img src={leftBanner1} alt='e스포츠 배너 이미지'></img></Link></li>
                    <li><Link to={'/'}><img src={leftBanner2} alt='대구수성아트피아 배너 이미지'></img></Link></li>
                    <li><Link to={'/'}><img src={leftBanner3} alt='링크 아트센터 배너 이미지'></img></Link></li>
                </ul>
            </div>

            <div ref={rightBannerRef} className={`${homeStyle.rightBanner} ${homeStyle.sideBanner} ${fixedVal ? homeStyle.fixed : ""}`}>
                <ul>
                    <li><Link to={'/'}><img src={rightBanner1} alt='샤롯데 배너 이미지'></img></Link></li>
                    <li><Link to={'/'}><img src={rightBanner2} alt='이대삼성홀 배너 이미지'></img></Link></li>
                </ul>
            </div>
        </main>
    )
}

export default Home