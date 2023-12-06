import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

export default function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <section style={{ 
        padding: '10px',
        margin: '5px',
        borderRadius: '5px',
        border: '1px solid #aaa'
      }}
      >
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
