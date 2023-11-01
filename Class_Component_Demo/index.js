import React from 'react';
import { createRoot } from 'react-dom/client';
import Rectangle from './Rectangle';

const App = () => {
    return (
        <div>
            <h1>Hello, React!</h1>
            <Rectangle />
        </div>
    );
  }
  
const root = createRoot(document.getElementById('root'));
root.render(<App />);
