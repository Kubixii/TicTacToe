import React from 'react'
import bemCssModules from 'bem-css-modules'
import { default as crossStyles } from './Cross.module.scss'

const style = bemCssModules(crossStyles)

const Cross = () => {
    return (
        <div className={style()}>
            <div className={style('crossLR')}>
            </div>
            <div className={style('crossRL')}>
            </div>
        </div>
    );
}

export default Cross;