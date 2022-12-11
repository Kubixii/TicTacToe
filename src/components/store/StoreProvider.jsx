import Cross from '../Cross/Cross';
import React from 'react'
import { createContext } from 'react';
import data from '../helpers/winningStates.json'
import { useState } from 'react';

export const StoreContext = createContext(null)
const { states } = data

const initialFieldState = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

const initalWinState = { "hasWon": false, "hasDraw": false, "linePosition": 0, "lineAngle": null }

const StoreProvider = ({ children }) => {

    const [playingField, setPlayingField] = useState(initialFieldState)
    const [isFigureCross, setIsFigureCross] = useState(true)
    const [winState, setWinState] = useState(initalWinState)

    const checkWinState = () => {
        // const isDraw = playingField.join().indexOf(0)
        // console.log(isDraw);

        console.log(checkWinForX())
        checkWinForO()
    }

    const checkWinForX = () => {
        const test = [0, 4, 8]
        const moves = [0, 4, 5, 2, 1]
        const reduced = moves.filter(item => {
            return test.indexOf(item) === -1 ? item : null;
        })
        return moves.length - 3 === reduced.length
    }

    const checkWinForO = () => {
        const board = playingField.map(row => row.map(col => col == "O" ? "P" : col == "X" ? 0 : col))

    }

    // const drawLine = (pos, deg = 0) => {
    //     let currentWinState = { ...winState }
    //     currentWinState.hasWon = true
    //     currentWinState.lineAngle = deg
    //     currentWinState.linePosition = pos - 1
    //     setWinState(currentWinState)
    // }

    const updatePlayingField = (row, col) => {
        const arrayChar = isFigureCross ? 'X' : 'O';
        setIsFigureCross(!isFigureCross)
        let stateCopy = [...playingField]
        stateCopy[row][col] = arrayChar
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