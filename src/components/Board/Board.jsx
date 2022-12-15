import { AppStoreContext } from '../Stores/AppStoreProvider'
import Field from '../Field/Field'
import React from 'react'
import { TicTacToeStoreContext } from '../Stores/TicTacToeStoreProvider'
import WinLine from '../WinLine/WinLine'
import bemCssModules from 'bem-css-modules'
import { default as boardStyles } from './Board.module.scss'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const style = bemCssModules(boardStyles)

const Board = () => {
    const { board, playAgain, isFigureCross, endgameMessage, winState: { hasWon, linePosition, lineAngle } } = useContext(TicTacToeStoreContext)
    const { quitGame } = useContext(AppStoreContext)
    const [fields, setFields] = useState(null)

    useEffect(() => {
        // if (board) {
        const number = board.map(() => {
            const numbers = "0123456789";
            const random = Math.floor(0 + Math.random() * 9)
            return numbers[random]
        }).join('')
        const initialBoard = board.map((field, index) => <Field id={index + 1} key={`${index}-${number}`} />)
        setFields(initialBoard)
        // }
    }, [board])

    return (
        <div className={style()}>
            <div className={style('moveIndicator')}>
                <p>Ruch gracza: {!hasWon && isFigureCross ? 'X' : 'O'}</p>
            </div>
            <div className={style('board')}>
                {hasWon && <WinLine position={linePosition} angle={lineAngle} />}
                {fields}
            </div>
            <div className={style('endgameMessage')}>
                <p>{endgameMessage}</p>
            </div>
            <div className={style('options')}>
                <button onClick={quitGame}>Powrót</button>
                <button onClick={playAgain}>Graj jeszcze raz</button>
            </div>
        </div>
    );
}

export default Board;