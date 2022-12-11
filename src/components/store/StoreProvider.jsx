import Cross from '../Cross/Cross';
import React from 'react'
import { createContext } from 'react';
import data from '../helpers/winningStates.json'
import { useState } from 'react';

export const StoreContext = createContext(null)
const { states } = data

const initialFieldState = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
]

const initalWinState = { "hasWon": false, "linePosition": 0, "lineAngle": null }

const StoreProvider = ({ children }) => {

    const [playingField, setPlayingField] = useState(initialFieldState)
    const [isFigureCross, setIsFigureCross] = useState(true)
    const [winState, setWinState] = useState(initalWinState)

    const checkWinState = () => {
    }

    // const drawLine = (pos, deg = 0) => {
    //     let currentWinState = { ...winState }
    //     currentWinState.hasWon = true
    //     currentWinState.lineAngle = deg
    //     currentWinState.linePosition = pos - 1
    //     setWinState(currentWinState)
    // }

    const updatePlayingField = (id) => {
        const arrayChar = isFigureCross ? 'X' : 'O';
        setIsFigureCross(!isFigureCross)
        let stateCopy = [...playingField]
        stateCopy[id] = arrayChar
        setPlayingField(stateCopy)
        checkWinState()
    }

    return (
        <StoreContext.Provider value={{
            playingField,
            isFigureCross,
            winState,
            updatePlayingField,
        }}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;