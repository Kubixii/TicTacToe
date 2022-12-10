import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';

export const StoreContext = createContext(null)

const StoreProvider = ({ children }) => {
    const [test, setTest] = useState('')
    return (
        <StoreContext.Provider value={{
            test
        }}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;