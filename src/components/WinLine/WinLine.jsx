import React from 'react';
import bemCssModules from 'bem-css-modules'
import { default as winlineStyles } from './WinLine.module.scss'

const style = bemCssModules(winlineStyles)
const leftOffset = 14.5;
const fieldWidth = 32.62;

const WinLine = ({ position, angle }) => {

    const offset = {
        left: `${leftOffset + fieldWidth * position}%`
    }
    const rotate = {
        rotate: `${angle}deg`
    }

    return (
        <div className={style('lineWrapper')} style={rotate}>
            <div className={style()} style={offset}>
                <div>
                    <div className={style('circleTop')}>
                    </div>
                    <div className={style('circleBottom')}>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WinLine;