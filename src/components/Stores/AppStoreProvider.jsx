import React from 'react'
import { createContext } from 'react';

export const AppStoreContext = createContext(null)

const AppStoreProvider = ({ children }) => {

    return (
        <AppStoreContext.Provider value={{

        }}>
            {children}
        </AppStoreContext.Provider>
    );
}

export default AppStoreProvider;