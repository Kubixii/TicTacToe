import Circle from '../Circle/Circle';
import Cross from '../Cross/Cross';
import React from 'react';
import bemCssModules from 'bem-css-modules'
import { default as figureStyles } from './Figure.module.scss'

const style = bemCssModules(figureStyles)

const Figure = ({ type }) => {

    const figure = type === 'cross' ? <Cross /> : <Circle />

    return (
        <div className={style()}>
            <div className={style('animation')}>
                {figure}
            </div>
        </div>
    );
}

export default Figure;