import Field from '../Field/Field';
import Figure from '../Figure/Figure';
import React from 'react';
import bemCssModules from 'bem-css-modules'
import { default as tictactoeStyles } from './TicTacToe.module.scss'

const style = bemCssModules(tictactoeStyles)

const TicTacToe = () => {
    return (
        <div className={style()}>
            {/* <Figure type='cross' />
            <Figure type='circle' /> */}

            <Field id={0} />
        </div>
    );
}

export default TicTacToe;