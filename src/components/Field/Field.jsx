import React, { useEffect, useState } from 'react';

import Figure from '../Figure/Figure';
import { StoreContext } from '../store/StoreProvider';
import bemCssModules from 'bem-css-modules'
import { default as fieldStyles } from './Field.module.scss'
import { useContext } from 'react';

const style = bemCssModules(fieldStyles)

const Field = ({ row, col }) => {

    const { updatePlayingField, isFigureCross, winState: { hasWon } } = useContext(StoreContext)
    const [show, setShow] = useState(false)
    const [currentFigure, setCurrentFigure] = useState(null)

    const fillField = () => {
        setShow(true)
        updatePlayingField(row, col)
    }

    useEffect(() => {
        if (!show) setCurrentFigure(isFigureCross ? 'cross' : 'circle')
    }, [isFigureCross])

    const shouldBePointer = {
        cursor: !show ? 'pointer' : null
    }

    return (
        <div
            className={style()}
            onClick={!show && !hasWon ? fillField : undefined}
            style={shouldBePointer}
        >
            {show && <Figure type={currentFigure} />}
        </div>
    );
}

export default Field;