import React from 'react'
import { Link } from 'react-router-dom'

import posterComponentStyle from '../styles/posterComponent.module.scss'


function PosterComponent( {props} ) {
<<<<<<< HEAD
    console.log(props.mainSrc);
    
    return (
        <div>
            <Link to={'/'}>
                <div className={posterComponentStyle.imgBox}>
                    <img></img>
                </div>
                <div className={posterComponentStyle.imgInfoBox}>

                </div>
            </Link>
        </div>
=======
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
>>>>>>> afb45bb4957c55d6024ce26abc55f71e8ce6c643
    )
}

export default PosterComponent