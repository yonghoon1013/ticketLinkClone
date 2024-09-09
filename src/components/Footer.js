import React from 'react'

import footerStyle from '../styles/footer.module.scss'
import { Link } from 'react-router-dom'

import blogIcon from '../asset/imgs/icon/blog.svg'
import youtubeIcon from '../asset/imgs/icon/youtube.svg'
import instagramIcon from '../asset/imgs/icon/instagram.svg'
import facebookIcon from '../asset/imgs/icon/facebook.svg'
import xIcon from '../asset/imgs/icon/x.svg'

function Footer() {
    return (
        <footer className={footerStyle.footer}>
            <div className={footerStyle.footerInner}>
            <div className={footerStyle.footerTop}>
                <ul className={footerStyle.footerTopList}>
                    <li><Link to={'/'}>회사소개</Link></li>
                    <li><Link to={'/'}>개인정보 처리방침</Link></li>
                    <li><Link to={'/'}>청소년 보호정책</Link></li>
                    <li><Link to={'/'}>이용약관</Link></li>
                    <li><Link to={'/'}>고객센터</Link></li>
                    <li><Link to={'/'}>티켓판매안내</Link></li>
                    <li><Link to={'/'}>광고안내</Link></li>
                </ul>
            </div>
            <div className={footerStyle.footerBottom}>
                <div className={footerStyle.left}>
                    <span className={footerStyle.title}>엔에이치엔링크 주식회사</span>
                    <address>
                        <p>
                            <span>주소: 06043 서울특별시 강남구 강남대로 586, 제이빌딩</span>
                            <span>대표이사: 왕문주</span>
                            <span>사업자등록번호: 144-81-25090</span>
                        </p>
                        <p>
                            <span>1588-7890</span>
                            <span>membership@nhnlink.co.kr</span>
                            <span>통신판매업 신고번호: 제 2023-서울강남-04352호</span>
                            <span>사업자정보확인</span>
                            <span>개인정보보호 책임자: 서상훈</span>
                        </p>
                    </address>
                    <span className={footerStyle.copyright}>Copyright © NHN LINK Corporation. All rights reserved.</span>
                </div>
                <div className={footerStyle.right}>
                    <ul className={footerStyle.iconList}>
                        <li><Link to={'/'}><img src={blogIcon} alt='블로그 아이콘'></img></Link></li>
                        <li><Link to={'/'}><img src={youtubeIcon} alt='유튜브 아이콘'></img></Link></li>
                        <li><Link to={'/'}><img src={facebookIcon} alt='페이스북 아이콘'></img></Link></li>
                        <li><Link to={'/'}><img src={instagramIcon} alt='인스타그램 아이콘'></img></Link></li>
                        <li><Link to={'/'}><img src={xIcon} alt='트위터 아이콘'></img></Link></li>
                    </ul>
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer