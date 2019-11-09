import React, { useState } from 'react';
import { ReservoirProvider } from '../../data/ReservoirContext';
import { HomePage } from '../../pages/Home';

export const App = () => {
  const [ReservoirData, setReservoirData] = useState(null);
  return (
    <ReservoirProvider value={ReservoirData}>
      <HomePage />
    </ReservoirProvider>
  );
};
