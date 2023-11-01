import React from 'react';
import {createRoot} from 'react-dom/client';
import WarningButton from './WarningButton';

const App = () => {
  return (
      <div>
          <h1>Hello, React!</h1>
          <WarningButton />
      </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
