import AppStoreProvider from './components/Stores/AppStoreProvider';
import Game from './components/Game/Game';
import React from 'react'

const App = () => {
  return (
    <AppStoreProvider>
      <Game />
    </AppStoreProvider>
  );
}

export default App;