import React from 'react'

import { SideBar } from './components/SideBar';
import { Main } from './components/Main';
import { AppContext } from './context/AppContext';
import { useInitialState } from './hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <SideBar />
      <Main />
    </AppContext.Provider>
  )
}

export default App