import Field from '../Field/Field'
import React from 'react'
import { StoreContext } from '../store/StoreProvider'
import WinLine from '../WinLine/WinLine'
import bemCssModules from 'bem-css-modules'
import { default as boardStyles } from './Board.module.scss'
import { useContext } from 'react'

const style = bemCssModules(boardStyles)

const Board = () => {

    const { winState: { hasWon, linePosition, lineAngle } } = useContext(StoreContext)

    const fields = Array.from({ length: 9 }, (_, index) => {
        return <Field id={index} key={index} />
    })

    return (
        <div className={style()}>
            {hasWon && <WinLine position={linePosition} angle={lineAngle} />}
            {fields}
        </div>
    );
}

export default Board;