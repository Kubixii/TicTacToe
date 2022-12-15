import { AppStoreContext } from '../Stores/AppStoreProvider';
import React from 'react';
import Start from '../Start/Start';
import TicTacToe from '../TicTacToe/TicTacToe';
import { useContext } from 'react';

const Game = () => {
    const { isInGame } = useContext(AppStoreContext)
    return isInGame ? <TicTacToe /> : <Start />
}

export default Game;