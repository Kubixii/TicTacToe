import React from 'react'
import { createContext } from 'react';
import data from '../helpers/winningStates.json'
import { useEffect } from 'react';
import { useState } from 'react';

export const TicTacToeStoreContext = createContext(null)
const { states } = data


const StoreProvider = ({ children, PvCPU = true }) => {
    const initialPlayerMoves = {
        "X": [],
        "O": []
    }
    const initalWinState = { "hasWon": false, "hasDraw": false, "linePosition": 0, "lineAngle": null }
    const initialCPUMoves = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const initialBoard = ['', '', '', '', '', '', '', '', '']

    const [board, setBoard] = useState(initialBoard)
    const [playerMoves, setPlayerMoves] = useState({ ...initialPlayerMoves })
    const [isFigureCross, setIsFigureCross] = useState(true)
    const [winState, setWinState] = useState({ ...initalWinState })
    const [endgameMessage, setEndgameMessage] = useState(null)
    const [CPUAviliableMoves, setCPUAviliableMoves] = useState(initialCPUMoves)

    const checkWinState = () => {
        if (checkWin(playerMoves.X)) return 'Wygrał X';
        if (checkWin(playerMoves.O)) return 'Wygrał O';
        const isDraw = parseInt(playerMoves.X.length) + parseInt(playerMoves.O.length)
        if (isDraw === 9) return 'Remis'
        return null
    }

    const playAgain = () => {
        setEndgameMessage(null)
        setIsFigureCross(true)
        setWinState({ ...initalWinState })
        setPlayerMoves({ ...initialPlayerMoves })
        setBoard([...initialBoard])
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
        let movesCopy = { ...playerMoves }
        setPlayerMoves(movesCopy)
        setEndgameMessage(checkWinState())
        const boardTemp = [...board]
        const arrayChar = isFigureCross ? 'X' : 'O';
        boardTemp[id - 1] = arrayChar
        setBoard(boardTemp)

        if (PvCPU) {
            const CPUmove = 1
            const movesLeft = CPUAviliableMoves.filter(move => move !== id).filter(move => move !== CPUmove)
            setCPUAviliableMoves(movesLeft)
        } else {
            const arrayChar = isFigureCross ? 'X' : 'O';
            setIsFigureCross(!isFigureCross)
            movesCopy[arrayChar].push(id);
        }
    }

    return (
        <TicTacToeStoreContext.Provider value={{
            isFigureCross,
            winState,
            endgameMessage,
            board,
            updatePlayingField,
            playAgain
        }}>
            {children}
        </TicTacToeStoreContext.Provider>
    );
}

export default StoreProvider;