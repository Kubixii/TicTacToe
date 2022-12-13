import Board from '../Board/Board';
import React from 'react';
import StoreProvider from '../Stores/TicTacToeStoreProvider';
import bemCssModules from 'bem-css-modules'
import { default as tictactoeStyles } from './TicTacToe.module.scss'

const style = bemCssModules(tictactoeStyles)

const TicTacToe = () => {

    return (
        <StoreProvider>
            <div className={style()}>
                <Board />
            </div>
        </StoreProvider>
    );
}

export default TicTacToe;