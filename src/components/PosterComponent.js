import React from 'react'
import { Link } from 'react-router-dom'

import posterComponentStyle from '../styles/posterComponent.module.scss'


function PosterComponent( {props, size} ) {

    const sizeClass = size === 'mini' ? posterComponentStyle.mini :
    size === 'medium' ? posterComponentStyle.medium :
    size === 'large' ? posterComponentStyle.large :
    '';
    
    return (
            <Link to={'/'}>
                <div className={`${posterComponentStyle.imgBox} ${sizeClass}`}>
                    <img src={require(`../${props.mainSrc}`)} alt={props.alt}></img>
                </div>
                <div className={posterComponentStyle.imgInfoBox}>
                    <span className={posterComponentStyle.title}>{props.title}</span>
                    {
                        // 데이터에 date객체가 있으면 date값의 span태그를 나타냄
                        props.date && <span className={posterComponentStyle.date}>{props.date}</span>
                    }
                    {
                        // 데이터에 schedule객체가 있으면 schedule값의 span태그를 나타냄
                        props.schedule && <span className={posterComponentStyle.schedule}>{props.schedule}</span>
                    }
                </div>
            </Link>
    )
}

export default PosterComponent