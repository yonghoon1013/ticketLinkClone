import React from 'react'
import { Link } from 'react-router-dom'

import posterComponentStyle from '../styles/posterComponent.module.scss'


function PosterComponent( {props} ) {
    console.log(props);
    
    return (
            <Link to={'/'}>
                <div className={posterComponentStyle.imgBox}>
                    <img src={require(`../${props.mainSrc}`)} alt={props.alt}></img>
                </div>
                <div className={posterComponentStyle.imgInfoBox}>
                    <span className={posterComponentStyle.title}>{props.title}</span>
                    <span className={posterComponentStyle.date}>{props.date}</span>
                </div>
            </Link>
    )
}

export default PosterComponent