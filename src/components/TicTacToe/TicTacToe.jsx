import Board from '../Board/Board';
import React from 'react';
import bemCssModules from 'bem-css-modules'
import { default as tictactoeStyles } from './TicTacToe.module.scss'

const style = bemCssModules(tictactoeStyles)

const TicTacToe = () => {

    return (
        <div className={style()}>
            <Board />
        </div>
    );
}

export default TicTacToe;