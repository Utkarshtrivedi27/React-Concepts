import React from 'react';
import { createRoot } from 'react-dom/client';
import StopWatch from './StopWatch';

const App = () => {
    return (
        <div>
            <StopWatch/>
        </div>
        
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
