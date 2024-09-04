import React from 'react'
import { Link } from 'react-router-dom'

import posterComponentStyle from '../styles/posterComponent.module.scss'


function PosterComponent( {props} ) {
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
    )
}

export default PosterComponent