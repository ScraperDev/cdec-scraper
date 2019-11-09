import React, { useState } from 'react';
import { ReservoirProvider } from '../../data/ReservoirContext';
import { HomePage } from '../../pages/Home';

export const App = () => {
  return (
    <ReservoirProvider value='test'>
      <HomePage />
    </ReservoirProvider>
  );
};
