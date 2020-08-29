import React from 'react';

import { PosContextProvider } from './context/POS/PosContext';
import POS from './pages/POS';

export default function App() {
  return (
    <PosContextProvider>
      <POS />
    </PosContextProvider>
  );
}
