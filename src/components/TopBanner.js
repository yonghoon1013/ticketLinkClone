import React, { useState } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from '@fortawesome/free-solid-svg-icons';

import topBannerStyle from '../styles/topBanner.module.scss'
import topBanner from '../asset/imgs/common/TopLineBanner_pc_여행박사1.jpg'

function TopBanner() {

  const [closeVal, setCloseVal] = useState(true);

  return (
    closeVal && <div className={topBannerStyle.topBannerWrap}>
      <img src={topBanner} alt='상단배너'></img>
      <FontAwesomeIcon onClick={() => { setCloseVal(!closeVal) }} className={topBannerStyle.close} icon={faX} />
    </div>
  )
}

export default TopBanner