import Cross from '../Cross/Cross';
import React from 'react'
import { createContext } from 'react';
import data from '../helpers/winningStates.json'
import { useState } from 'react';

export const StoreContext = createContext(null)
const { states } = data

const initialPlayerMoves = {
    "X": [],
    "O": []
}

const initalWinState = { "hasWon": false, "hasDraw": false, "linePosition": 0, "lineAngle": null }

const StoreProvider = ({ children }) => {

    const [playerMoves, setPlayerMoves] = useState(initialPlayerMoves)
    const [isFigureCross, setIsFigureCross] = useState(true)
    const [winState, setWinState] = useState(initalWinState)
    const [endgameMessage, setEndgameMessage] = useState(null)

    const checkWinState = () => {
        // finish this logic
        checkWin(playerMoves.X);
        checkWin(playerMoves.O);

        const isDraw = parseInt(playerMoves.X.length) + parseInt(playerMoves.O.length)
        if (isDraw === 9) {
            setEndgameMessage('remis')
            return
        }
    }

    const checkWin = (moves) => {
        let hasWon = false
        try {
            states.forEach(state => {
                let movesCopy = [...moves]
                const reduced = movesCopy.filter(move => {
                    return state.moves.indexOf(move) === -1 ? null : move
                })
                if (state.moves.toString() == reduced.sort().toString()) {
                    hasWon = true
                    setWinState(state.line)
                    throw new Error()
                }
            })
        } catch (err) { }
        return hasWon
    }

    const updatePlayingField = (id) => {
        const arrayChar = isFigureCross ? 'X' : 'O';
        setIsFigureCross(!isFigureCross)
        let movesCopy = { ...playerMoves }
        movesCopy[arrayChar].push(id);
        setPlayerMoves(movesCopy)
        checkWinState()
    }

    return (
        <StoreContext.Provider value={{
            isFigureCross,
            winState,
            endgameMessage,
            updatePlayingField
        }}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;