import React, { useContext } from 'react';
import { ReservoirContext } from '../../data/ReservoirContext';

export const HomePage = () => {
  const state = useContext(ReservoirContext);
  console.log(state);
  return <div />;
};
