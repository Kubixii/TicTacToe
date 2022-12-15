import { AppStoreContext } from '../Stores/AppStoreProvider';
import React from 'react';
import bemCssModules from 'bem-css-modules'
import { default as startStyles } from './Start.module.scss'
import { useContext } from 'react';

const style = bemCssModules(startStyles)

const Start = () => {

    const { startGame } = useContext(AppStoreContext)

    return (
        <div className={style()}>
            <button onClick={() => startGame('1v1')}>1 vs 1</button>
            <button onClick={() => startGame('1vpc')}>1 vs pc</button>
        </div>
    );
}

export default Start;