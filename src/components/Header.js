import React, { useState } from 'react'
import headerStyle from '../styles/header.module.scss'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// 이미지
import bugsLogo from '../asset/imgs/wordImg/bugs.svg';
import comicoLogo from '../asset/imgs/wordImg/comico.svg';
import hangameLogo from '../asset/imgs/wordImg/hangame.svg';
import insidenhnLogo from '../asset/imgs/wordImg/insidenhn.svg';
import logo from '../asset/imgs/common/logo.svg';
import headerBanner from '../asset/imgs/common/티켓링크_GNB_408x88_A.jpg';

function Header() {

    const [langCheckVal, setLangCheckVal] = useState(false);
    const [collaboVal, setCollaboVal] = useState(false);

    return (
        <header className={headerStyle.header}>
            <div className={headerStyle.utillHeader}>
                <div className={headerStyle.utillHeaderInner}>
                    <div className={headerStyle.left}>
                        <button type='button' onClick={() => { setLangCheckVal(!langCheckVal) }}>KOR</button>
                        {
                            langCheckVal ? <FontAwesomeIcon icon={faCaretUp}></FontAwesomeIcon> : <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                        }
                        {
                            langCheckVal &&
                            <div className={headerStyle.langBox}>
                                <ul className={headerStyle.langList}>
                                    <li><span>ENG</span></li>
                                    <li><span>JPN</span></li>
                                    <li><span>CHN</span></li>
                                </ul>
                            </div>
                        }
                    </div>

                    <div className={headerStyle.right}>
                        <ul className={headerStyle.utillList}>
                            <li><Link to={'/'}>로그인</Link></li>
                            <li><Link to={'/'}>예매확인/취소</Link></li>
                            <li><Link to={'/'}>회원가입</Link></li>
                            <li><Link to={'/'}>고객센터</Link></li>
                            <li><Link to={'/'} className={headerStyle.payco}></Link></li>
                            <li className={headerStyle.collaboDrop}>
                                <button type='button' onClick={() => { setCollaboVal(!collaboVal) }}>관계사</button>
                                {
                                    collaboVal ? <FontAwesomeIcon icon={faCaretUp}></FontAwesomeIcon> : <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                                }
                                {
                                    collaboVal &&
                                    <div className={headerStyle.collaboBox}>
                                        <ul className={headerStyle.collaboList}>
                                            <li><a href='/'><span className={headerStyle.bugs}></span></a></li>
                                            <li><a href='/'><span className={headerStyle.comico}></span></a></li>
                                            <li><a href='/'><span className={headerStyle.hangame}></span></a></li>
                                            <li><a href='/'><span className={headerStyle.insidenhn}></span></a></li>
                                        </ul>
                                    </div>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={headerStyle.headerMid}>
                <div className={headerStyle.headerMidInner}>
                    <div className={headerStyle.left}>
                        <Link to={'/'} className={headerStyle.logoBox}><h1 className={headerStyle.logo}><img src={logo} alt='로고'></img></h1></Link>
                        <ul className={headerStyle.headerNavList}>
                            <li><Link to={'/'}>공연/전시</Link></li>
                            <li><Link to={'/'}>스포츠</Link></li>
                            <li><Link to={'/'}>여행</Link></li>
                        </ul>
                    </div>

                    <div className={headerStyle.right}>
                        <a href='/'>
                            <img src={headerBanner} alt='헤더배너'></img>
                        </a>
                    </div>
                </div>
            </div>

            <div className={headerStyle.headerGnb}>
                <div className={headerStyle.headerGnbInner}>
                    <div className={headerStyle.left}>
                        <nav className={headerStyle.gnbListBox}>
                            <ul className={headerStyle.gnbList}>
                                <li><Link to={'/'}>홈</Link></li>
                                <li><Link to={'/'}>공연</Link></li>
                                <li><Link to={'/'}>전시</Link></li>
                                <li><Link to={'/'}>링크ON</Link></li>
                            </ul>
                            <ul className={headerStyle.gnbList}>
                                <li><Link to={'/'}>랭킹</Link></li>
                                <li><Link to={'/'}>지역</Link></li>
                                <li><Link to={'/'}>이벤트</Link></li>
                                <li><Link to={'/'}>기획전</Link></li>
                                <li><Link to={'/'}>PAYCO VIP ZONE</Link></li>
                            </ul>
                        </nav>
                    </div>

                    <div className={headerStyle.right}>
                        <div className={headerStyle.searchBox}>
                            <input type='text' placeholder='검색어를 입력해 주세요'></input>
                            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header