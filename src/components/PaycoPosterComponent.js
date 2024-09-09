import React from 'react'
import { Link } from 'react-router-dom'

import paycoPosterStyle from '../styles/paycoPoster.module.scss'
function PaycoPosterComponent({ props }) {

    const discountRes = (price, discount) => {
        const discountAmount = price * (discount / 100);
        const priceRes = price - discountAmount;
        return Math.floor(priceRes).toLocaleString('ko-KR');
    }


    return (
        <Link to={'/'}>
            <div className={paycoPosterStyle.imgBox}>
                <img src={require(`../${props.mainSrc}`)} alt={props.alt}></img>
            </div>
            <div className={paycoPosterStyle.imgInfoBox}>
                <span className={paycoPosterStyle.title}>{props.title}</span>
                <div className={paycoPosterStyle.priceBox}>
                    <div className={paycoPosterStyle.left}>
                        <span className={paycoPosterStyle.discount}>
                            {props.discount}
                        </span>
                        <span className={paycoPosterStyle.discountTxt}>%</span>
                    </div>
                    <div className={paycoPosterStyle.right}>
                        <div className={paycoPosterStyle.originalPriceBox}>
                            <span className={paycoPosterStyle.price}>{props.price.toLocaleString('ko-KR')}</span>
                            <span>원</span>
                        </div>
                        <div className={paycoPosterStyle.discountPriceBox}>
                            <span className={paycoPosterStyle.discountPrice}>{discountRes(props.price, props.discount)}</span>
                            <span>원</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PaycoPosterComponent