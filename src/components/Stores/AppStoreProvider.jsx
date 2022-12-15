import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';

export const AppStoreContext = createContext(null)

const AppStoreProvider = ({ children }) => {

    const [isInGame, setIsInGame] = useState(false)

    const startGame = (type) => {
        setIsInGame(true)
    }

    const quitGame = () => setIsInGame(false)

    return (
        <AppStoreContext.Provider value={{
            isInGame,
            startGame,
            quitGame
        }}>
            {children}
        </AppStoreContext.Provider>
    );
}

export default AppStoreProvider;