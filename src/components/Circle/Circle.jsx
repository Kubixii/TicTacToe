import React from 'react'
import bemCssModules from 'bem-css-modules'
import { default as circleStyles } from './Circle.module.scss'

const style = bemCssModules(circleStyles)

const Circle = () => {
    return (
        <div className={style()}>
            <div className={style('innerCircle')}></div>
        </div>
    );
}

export default Circle;