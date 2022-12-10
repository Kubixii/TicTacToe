import React from 'react'
import StoreProvider from './components/store/StoreProvider';
import TicTacToe from './components/TicTacToe/TicTacToe';

const App = () => {
  return (
    <StoreProvider>
      <TicTacToe />
    </StoreProvider>
  );
}

export default App;